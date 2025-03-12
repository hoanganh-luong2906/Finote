'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const Pricing = () => {
	const [time, setTime] = useState('month');
	const trans = useTranslations('Pricing');

	return (
		<div className='row justify-content-center'>
			<div className='mil-switcher mil-mb-60 mil-up'>
				<span
					className={`${time == 'month' ? 'mil-active' : ''}`}
					id='month'
					onClick={() => setTime('month')}
				>
					{trans('monthly')}
				</span>
				<span
					className={`${time == 'year' ? 'mil-active' : ''}`}
					id='year'
					onClick={() => setTime('year')}
				>
					{trans('yearly')}
				</span>
			</div>
			<div className='row'>
				<div className='col-md-4 col-sm-6'>
					<div className='mil-price-card mil-up mil-mb-30'>
						<h4 className='mil-mb-15'>{trans('finote-consumer')}</h4>
						<p className='mil-text-s mil-soft mil-mb-30'>{trans('sending-receiving-money')}</p>
						<h4 className='mil-mb-30'>
							${' '}
							<span
								className='mil-pricing-table-price'
								data-year-price={0.0}
								data-month-price={0.0}
							>
								{time == 'year' ? '0.00' : '0.00'}
							</span>
							<span className='mil-sup-text mil-soft'> / {trans('price-month')}</span>
						</h4>
						<Link href='contact' className='mil-btn mil-m mil-fw mil-mb-30'>
							{trans('choose-a-plan')}
						</Link>
						<ul className='mil-text-mist mil-type-2 mil-check mil-text-s mil-soft mil-mb-60'>
							<li>{trans('unlimited-transactions')}</li>
							<li>{trans('basic-technical-support')}</li>
							<li>{trans('instructional-advisor')}</li>
						</ul>
						<a href='#.' className='mil-link mil-accent'>
							{trans('view-all-features')}
						</a>
					</div>
				</div>
				<div className='col-md-4 col-sm-6'>
					<div className='mil-price-card mil-featured mil-up mil-mb-30'>
						<h4 className='mil-light mil-mb-15'>{trans('finote-business')}</h4>
						<p className='mil-text-s mil-dark-soft mil-mb-30'>{trans('multi-currency-accounts')}</p>
						<h4 className='mil-light mil-mb-30'>
							${' '}
							<span
								className='mil-light mil-pricing-table-price'
								data-year-price='9.99'
								data-month-price='14.99'
							>
								{time == 'year' ? '9.99' : '14.99'}
							</span>
							<span className='mil-sup-text mil-dark-soft'> / {trans('price-month')}</span>
						</h4>
						<Link href='contact' className='mil-btn mil-m mil-fw mil-mb-30'>
							{trans('choose-a-plan')}
						</Link>
						<ul className='mil-text-mist mil-type-2 mil-check mil-text-s mil-dark-soft mil-mb-60'>
							<li>{trans('unlimited-transactions')}</li>
							<li>{trans('basic-technical-support')}</li>
							<li>{trans('instructional-advisor')}</li>
						</ul>
						<a href='#.' className='mil-link mil-accent'>
							{trans('view-all-features')}
						</a>
					</div>
				</div>
				<div className='col-md-4 col-sm-6'>
					<div className='mil-price-card mil-up mil-mb-30'>
						<h4 className='mil-mb-15'>{trans('finote-enterprise')}</h4>
						<p className='mil-text-s mil-soft mil-mb-30'>{trans('secure-reliable-transactions')}</p>
						<h4 className='mil-mb-30'>
							${' '}
							<span
								className='mil-pricing-table-price'
								data-year-price='34.99'
								data-month-price={49.0}
							>
								{time == 'year' ? '34.99' : '49.00'}
							</span>
							<span className='mil-sup-text mil-soft'> / {trans('price-month')}</span>
						</h4>
						<Link href='contact' className='mil-btn mil-m mil-fw mil-mb-30'>
							{trans('choose-a-plan')}
						</Link>
						<ul className='mil-text-mist mil-type-2 mil-check mil-text-s mil-soft mil-mb-60'>
							<li>{trans('unlimited-transactions')}</li>
							<li>{trans('basic-technical-support')}</li>
							<li>{trans('instructional-advisor')}</li>
						</ul>
						<a href='#.' className='mil-link mil-accent'>
							{trans('view-all-features')}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pricing;
