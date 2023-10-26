import type { RequestEvent } from '../rooms/$types';

export function GET({ url }: RequestEvent) {
	return new Response (JSON.stringify({message : 'helloworld'}));
}