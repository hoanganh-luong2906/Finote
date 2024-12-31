import { IUpdateLocaleRequest } from '../_utils/constants';

export async function PUT(request: Request) {
	const req = await request.json();
	const body: IUpdateLocaleRequest = { ...req };

	if (body.locale?.length > 0) {
		return new Response('Successfully updated language', {
			status: 200,
			headers: {
				'Set-Cookie': `locale=${body.locale}; HttpOnly; Secure; Path=/; SameSite=Lax`,
			},
		});
	} else {
		return new Response('Failed to update language', { status: 400 });
	}
}
