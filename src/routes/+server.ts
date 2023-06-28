import type { RequestEvent } from './$types';

export function GET({ url }: RequestEvent) {
	const firstName: string = url.searchParams.get('firstName') ?? 'Default firstname';
	const lastName: string = url.searchParams.get('lastName') ?? 'Default lastname';
	return new Response('Hello ' + firstName + ' ' + lastName);
}
