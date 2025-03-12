import { PageBanner } from '@/commons/components/Banner';
import { CallToAction2 } from '@/commons/components/CallToAction';
import PageLayout from '@/commons/PageLayout';
import { useTranslations } from 'next-intl';

const page = () => {
	const trans = useTranslations('Contact');
	return (
		<PageLayout bg={false}>
			<PageBanner pageName='Contact us' title={trans('title')} />

			{/* contact */}
			<div className='mil-blog-list mil-p-0-160'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-9'>
							<form>
								<div className='row'>
									<div className='col-md-6 mil-mb-30'>
										<input
											className='mil-input mil-up'
											type='text'
											placeholder={trans('input-name')}
											name='name'
										/>
									</div>
									<div className='col-md-6 mil-mb-30'>
										<input
											className='mil-input mil-up'
											type='email'
											placeholder={trans('input-email')}
											name='email'
										/>
									</div>
									<div className='col-xl-12 mil-mb-30'>
										<input
											className='mil-input mil-up'
											type='tel'
											placeholder={trans('input-tele')}
											name='tel'
										/>
									</div>
									<div className='col-xl-12 mil-mb-30 '>
										<textarea
											cols={30}
											rows={10}
											className='mil-up'
											placeholder={trans('input-message')}
											name='message'
											defaultValue={''}
										/>
									</div>
								</div>
								<div className='mil-checkbox-frame mil-mb-30 mil-up'>
									<div className='mil-checkbox'>
										<input type='checkbox' id='checkbox' name='checkmark' defaultChecked />
										<label htmlFor='checkbox' />
									</div>
									<p className='mil-text-xs mil-soft'>{trans('term-agreement')}</p>
								</div>
								<div className='mil-up'>
									<button type='submit' className='mil-btn mil-m'>
										{trans('send-msg')}
									</button>
								</div>
							</form>
							<div className='alert-success' style={{ display: 'none' }}>
								<h5>{trans('success-alert')}</h5>
							</div>
							<div className='mil-p-160-0'>
								<h5 className='mil-mb-30 mil-up'>{trans('contact-channel')}</h5>
								<p className='mil-text-m mil-soft mil-mb-10 mil-up'>{trans('address')}</p>
								<p className='mil-text-m mil-soft mil-mb-10 mil-up'>{trans('phone')}</p>
								<p className='mil-text-m mil-soft mil-mb-10 mil-up'>{trans('fax')}</p>
								<p className='mil-text-m mil-soft mil-up'>{trans('email')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* contact end */}
			{/* call to action */}
			<CallToAction2 />
			{/* call to action end */}
		</PageLayout>
	);
};
export default page;
