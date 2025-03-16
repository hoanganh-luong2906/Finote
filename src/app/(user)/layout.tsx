import { auth } from '@r/auth';
import { notFound, redirect } from 'next/navigation';

export default async function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const session = await auth();
	if (!session) {
		notFound();
	}

	return <>{children}</>;
}
