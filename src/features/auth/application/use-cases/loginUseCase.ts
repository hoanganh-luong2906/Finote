import { signIn } from 'next-auth/react';

export const loginUseCase = async () => {
	'use server';
	await signIn('google');
};
