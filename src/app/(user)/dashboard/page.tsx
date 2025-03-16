import { auth, signOut } from '@r/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const Dashboard = async () => {
	const session = await auth();

	return (
		<div>
			<h1>Logged in as: </h1>
			<h2>{JSON.stringify(session, null, 2)}</h2>
			<button
				onClick={async () => {
					'use server';
					await signOut();
					redirect('/home');
				}}
			>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
