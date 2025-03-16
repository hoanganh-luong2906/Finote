import useNotify from '@/hooks/useNotify';
import { DropdownOption } from '@/store/types/global';
import { UpdateLocaleRequest } from '@/store/types/locale';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

type LanguageUseCase = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	setSelectedOption: Dispatch<SetStateAction<string>>;
};

export const languageUseCase = async (
	props: LanguageUseCase,
	option: DropdownOption<'en' | 'vi'>
) => {
	const endpoint = '/api/locale';
	const router = useRouter();
	const actionTrans = useTranslations('System');
	const { setIsOpen, setSelectedOption } = props;

	const formBody: UpdateLocaleRequest = {
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
