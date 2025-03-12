'use client';
import { IUpdateLocaleRequest } from '@/app/api/_utils/constants';
import useNotify from '@/hooks/useNotify';
import { IDropdownOption } from '@/utilities/constants';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const languageOptions: IDropdownOption<'en' | 'vi'>[] = [
	{ value: 'en', key: 'English' },
	{ value: 'vi', key: 'Tiếng Việt' },
];

const Header = ({ dark }: any) => {
	const currentPath = usePathname();
	const activeMenuFuntion = (value: any) =>
		value.some((el: any) => currentPath.includes(el)) ? 'mil-active' : '';
	const [toggle, setToggle] = useState(false);
	const trans = useTranslations('Navigation');
	const actionTrans = useTranslations('System');
	const locale = useLocale();
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>('');
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSelectedOption(locale);
	}, [locale]);

	const toggleDropdown = () => {
		setIsOpen(true);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	const handleOptionClick = async (option: IDropdownOption<'en' | 'vi'>) => {
		const endpoint = '/api/locale';
		const formBody: IUpdateLocaleRequest = {
			locale: option.value,
		};

		const res = await fetch(endpoint, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formBody),
		});
		if (res.ok) {
			setSelectedOption(option.value);
			setIsOpen(false);
			router.refresh();
		} else {
			useNotify({
				message: actionTrans('locale-update-failed'),
				type: 'error',
			});
		}
	};

	return (
		<div className={`mil-top-panel ${dark ? 'mil-dark-2' : ''}`}>
			<div className='container'>
				<Link href='/' className='mil-logo'>
					<img
						src={dark ? 'img/logo-light.png' : 'img/logo.svg'}
						alt='Finote'
						width={120}
						height={35}
					/>
				</Link>
				<nav className={`mil-top-menu ${toggle ? 'mil-active' : ''}`}>
					<ul>
						<li
							className={`${
								currentPath.includes('home') || currentPath == '/' ? 'mil-active' : ''
							}`}
						>
							<Link href='/'>{trans('home')}</Link>
						</li>
						<li className={`${activeMenuFuntion(['about'])}`}>
							<Link href='about'>{trans('about')}</Link>
						</li>
						<li className={`${activeMenuFuntion(['services'])}`}>
							<Link href='services'>{trans('services')}</Link>
						</li>
						<li className={`mil-has-children ${activeMenuFuntion(['blog', 'publication'])}`}>
							<a href='#.'>{trans('blog')}</a>
							<ul>
								<li>
									<Link href='blog'>{trans('blog-list')}</Link>
								</li>
								<li>
									<Link href='publication'>{trans('blog-detail')}</Link>
								</li>
							</ul>
						</li>
						<li className={`${activeMenuFuntion(['contact'])}`}>
							<Link href='contact'>{trans('contact')}</Link>
						</li>
						<li
							className={`mil-has-children ${activeMenuFuntion(['career', 'price', 'register'])}`}
						>
							<a href='#.'>{trans('pages')}</a>
							<ul>
								<li>
									<Link href='price'>{trans('pricing')}</Link>
								</li>
								<li>
									<Link href='register'>{trans('register')}</Link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div className='w-[15vw] flex flex-row justify-end items-center gap-[2vw]'>
					<div ref={dropdownRef} className='relative w-fit h-fit'>
						<button
							id='toggler'
							className='relative border-none p-2 rounded-full transition duration-500 ease-in-out hover:bg-gray-300'
							onClick={toggleDropdown}
							onMouseEnter={toggleDropdown}
						>
							<Image
								className='!opacity-50'
								src={'/img/home-3/icons/language-toggler.svg'}
								alt='Language Toggler'
								width={20}
								height={20}
							/>
						</button>
						<ul
							className={`${
								isOpen
									? 'opacity-1 translate-y-0 pointer-events-auto'
									: 'opacity-0 translate-y-[10px]'
							} absolute right-0 z-10 bg-white min-w-[160px] px-[15px] py-[15px] mt-[5px] flex flex-col gap-[5px] pointer-events-none rounded-[10px] transition-all duration-300 [transition-timing-function:cubic-bezier(0,0,0.3642,1)] shadow-[0_5px_5px_rgba(0,0,0,0.1)]`}
						>
							{languageOptions.map((option: IDropdownOption<'en' | 'vi'>) => (
								<li
									key={option.value}
									onClick={() => handleOptionClick(option)}
									className={`font-semibold ${
										selectedOption === option.value ? 'text-[#f27457]' : 'text-[#898D96]'
									} text-[15px] pl-[15px] py-2 cursor-pointer transition-all duration-200 [transition-timing-function:cubic-bezier(0,0,0.3642,1)] hover:text-[#f27457] hover:bg-[#F2FAFA]`}
								>
									{option.key}
								</li>
							))}
						</ul>
					</div>
					<div className='mil-menu-buttons'>
						<Link href='register' className='mil-btn mil-sm'>
							{trans('login')}
						</Link>
						<div
							className={`mil-menu-btn ${toggle ? 'mil-active' : ''}`}
							onClick={() => setToggle(!toggle)}
						>
							<span />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
