import type { RequestEvent } from '../hello/$types';

export function GET({ url }: RequestEvent) {
	return new Response (JSON.stringify({message : 'helloworld'}));
}