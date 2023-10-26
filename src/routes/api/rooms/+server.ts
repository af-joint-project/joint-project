import type { RequestEvent } from '../rooms/$types';

const rooms = [{ name: "289", x: 200, y: 400 }];

export function GET({ url }: RequestEvent) {
	return new Response (JSON.stringify(rooms));
}