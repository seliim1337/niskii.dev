import { readable } from "svelte/store";
import type { LanyardData, LanyardWebSocketMessage } from "./types.js";
import { LanyardOpcode } from "./types.js";

export function lanyard() {
	return readable<LanyardData>(undefined, (set) => {
		let ws: WebSocket;
		let interval: NodeJS.Timer;

		if (typeof window !== "undefined") {
			ws = new WebSocket("wss://api.lanyard.rest/socket");

			ws.addEventListener("message", ({ data }: { data: string }) => {
				const { op, d } = JSON.parse(data) as LanyardWebSocketMessage;

				switch (op) {
					case LanyardOpcode.Hello: {
						ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "546303073962950657" } }));

						interval = setInterval(() => {
							ws.send(JSON.stringify({ op: 3 }));
						}, d.heartbeat_interval);

						break;
					}

					case LanyardOpcode.Event: {
						set(d);
						break;
					}

					default: {
						break;
					}
				}
			});
		}

		return () => {
			if (typeof window !== "undefined") {
				clearInterval(interval);
				ws.close();
			}
		};
	});
}
