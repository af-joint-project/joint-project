import type { RequestEvent } from '@sveltejs/kit';

export function GET({ url }: RequestEvent) {
	return new Response (JSON.stringify({id: 1}));
}