import { auth } from '@r/auth';
import { redirect } from 'next/navigation';

export default async function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const session = await auth();
	if (session) {
		redirect('/');
	}

	return <>{children}</>;
}
