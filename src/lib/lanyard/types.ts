import type { GatewayActivity, GatewayActivityTimestamps } from "discord-api-types/v10";

export type LanyardSpotifyData = {
	album: string;
	album_art_url: string;
	artist: string;
	song: string;
	timestamps: GatewayActivityTimestamps;
	track_id: string;
};

export type LanyardDiscordUser = {
	avatar: string;
	discriminator: string;
	id: number;
	public_flags: number;
	username: string;
};

export type Status = "dnd" | "idle" | "offline" | "online";

export type LanyardData = {
	active_on_discord_desktop: boolean;
	active_on_discord_mobile: boolean;
	activities: GatewayActivity[];
	discord_status: Status;
	discord_user: LanyardDiscordUser;
	heartbeat_interval: number;
	kv: { [key: string]: string };
	listening_to_spotify: boolean;
	spotify: LanyardSpotifyData | null;
};

export enum LanyardOpcode {
	Event = 0,
	Hello = 1,
	Initialize = 2,
	Heartbeat = 3,
}

export type LanyardWebSocketEvent = "INIT_STATE" | "PRESENCE_UPDATE";

export type LanyardWebSocketMessage = {
	d: LanyardData;
	op: LanyardOpcode;
	seq: number;
	t: LanyardWebSocketEvent;
};

type LanyardRestPossibleResponse = { data: LanyardData } | { error: { code: string; message: string } };

export type LanyardRestResponse = LanyardRestPossibleResponse & {
	success: boolean;
};
