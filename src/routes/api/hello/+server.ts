import type { RequestEvent } from '../hello/$types';

export function GET({ url }: RequestEvent) {
	const message: string = url.searchParams.get('message') ?? '';
	return new Response (JSON.stringify({message : 'helloworld'}));
}