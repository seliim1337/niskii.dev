import { readable } from "svelte/store";
import type { LanyardData, LanyardWebSocketMessage } from "./types";
// eslint-disable-next-line import/extensions
import { browser } from "$app/environment";

export function lanyard() {
	return readable<LanyardData>(undefined, (set) => {
		let ws: WebSocket;
		let interval: NodeJS.Timer;

		if (browser) {
			ws = new WebSocket("wss://api.lanyard.rest/socket");

			ws.addEventListener("message", ({ data }: { data: string }) => {
				const { op, d } = JSON.parse(data) as LanyardWebSocketMessage;

				switch (op) {
					case 0: {
						set(d);
						break;
					}

					case 1: {
						ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "847865068657836033" } }));
						interval = setInterval(() => {
							ws.send(JSON.stringify({ op: 3 }));
						}, d.heartbeat_interval);
						break;
					}

					default: {
						break;
					}
				}
			});
		}

		return () => {
			if (browser) {
				clearInterval(interval);
				ws.close();
			}
		};
	});
}
