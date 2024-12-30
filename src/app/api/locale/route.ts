import { setRequestLocale } from 'next-intl/server';
import { IUpdateLocaleRequest } from '../_utils/constants';

export async function PUT(request: Request) {
	const req = await request.json();
	const body: IUpdateLocaleRequest = { ...req };

	if (body.locale.length > 0) {
		setRequestLocale(body.locale);
		return Response.json('Successfully update language', {
			status: 200,
			headers: {
				'Set-Cookie': [`locale=${body.locale}; HttpOnly; Secure; Path=/; SameSite=Lax`].join(','),
			},
		});
	} else {
		return Response.json('Failed to update language', {
			status: 400,
		});
	}
}
