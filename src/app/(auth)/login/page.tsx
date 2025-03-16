import { PageBanner } from '@/components/ui/Banner';
import PageLayout from '@/components/commons/PageLayout';
import { signIn } from '@r/auth';
import { useTranslations } from 'next-intl';

export const metadata = {
	icons: ['/img/logo-2.svg'],
	title: 'Finote | Login',
	description: 'Finote - Your Financial Companion',
};

const page = () => {
	const trans = useTranslations('Login');

	const handleGoogleLogin = async () => {
		'use server';
		await signIn('google');
	};

	const handleCredentialLogin = async (formData: { email: string; password: string }) => {
		'use server';
		await signIn('credentials', {
			email: formData.email,
			password: formData.password,
			callbackUrl: '/',
		});
	};

	return (
		<PageLayout noFooter>
			<PageBanner pageName='login' title={trans('title')} />
			{/* register form */}
			<div className='mil-blog-list mip-p-0-160'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-5'>
							<form action={handleGoogleLogin}>
								<input
									className='mil-input mil-up mil-mb-15'
									type='email'
									placeholder={trans('input-email')}
								/>
								<input
									className='mil-input mil-up mil-mb-15'
									type='password'
									placeholder={trans('input-pwd')}
								/>
								<div className='mil-up mil-mb-30'>
									<button type='submit' className='mil-btn mil-md mil-fw'>
										{trans('btn-login')}
									</button>
								</div>
								<p className='mil-text-xs mil-text-center mil-soft mil-mb-30'>
									{trans('title-alt')}
								</p>
								<div className='mil-up mil-mb-15'>
									<button type='submit' className='mil-btn mil-md mil-grey mil-fw mil-mb-30'>
										{trans('btn-google')}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* register form end */}
			<div className='mil-space-fix' />
		</PageLayout>
	);
};
export default page;
