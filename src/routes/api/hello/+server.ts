import type { RequestEvent } from '../hello/$types';

export function GET({ url }: RequestEvent) {
	const helloWorld: string = url.searchParams.get('helloworld') ?? '';
	return new Response (JSON.stringify({message : helloWorld}));
}