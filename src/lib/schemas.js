export const CoinSchema = {
	id: { type: "number" },
	name: { type: "string" },
	icon: { type: "string" },
	total: { type: "number" },
	index: { type: "number" },
	value: { type: "number" },
	active: { type: "boolean" }
};

export const PlayerSchema = {
	id: { type: "string" },
	game: { type: "string" },
	color: { type: "string" },
	name: { type: "string" },
	connected: { type: "boolean" },
};

export const GameSchema = {
	id: { type: "string" },
	active: { type: "boolean" },
	players: {
		type: "object",
		schema: PlayerSchema,
	},
	rounds_remaining: { type: "numeric" },
	multiplayer: { type: "boolean" },
	coins: {
		type: "object",
		schema: CoinSchema,
	}
};
