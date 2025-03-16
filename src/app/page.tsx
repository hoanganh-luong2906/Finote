import { auth, signOut } from '@r/auth';
import { redirect } from 'next/navigation';

const Page = async () => {
	const session = await auth();
	if (!session) {
		redirect('/home');
	} else {
		redirect('/dashboard');
	}
};

export default Page;
