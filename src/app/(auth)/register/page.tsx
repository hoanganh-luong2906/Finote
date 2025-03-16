import { PageBanner } from '@/components/ui/Banner';
import PageLayout from '@/components/commons/PageLayout';
import { signIn } from '@r/auth';
import { loginUseCase } from '@/features/auth/application/use-cases/loginUseCase';
import { useTranslations } from 'next-intl';

export const metadata = {
	icons: ['/img/logo-2.svg'],
	title: 'Finote | Register',
	description: 'Finote - Your Financial Companion',
};

const page = () => {
	const trans = useTranslations('Register');

	return (
		<PageLayout noFooter>
			<PageBanner pageName='register' title={trans('title')} />
			{/* register form */}
			<div className='mil-blog-list mip-p-0-160'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-5'>
							<form action={loginUseCase}>
								<input
									className='mil-input mil-up mil-mb-15'
									type='text'
									placeholder={trans('input-name')}
								/>
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
								<input
									className='mil-input mil-up mil-mb-30'
									type='password'
									placeholder={trans('input-pwd-cfm')}
								/>
								<div className='mil-up mil-mb-30'>
									<button type='submit' className='mil-btn mil-md mil-fw'>
										{trans('btn-create')}
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
								<p className='mil-text-xs mil-soft'>
									{trans.rich('register-term', {
										a: (content) => (
											<a href='#.' className='mil-link mil-soft'>
												{content}
											</a>
										),
									})}
								</p>
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
