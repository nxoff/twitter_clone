import Image from 'next/image';

import '../../styles/sign-pages.css';

const page = () => {
	return (
		<main className='main-sign-in'>
			<div className='left-bar'>
				<Image src='/x-main-logo.png' alt='' width={300} height={280} />
			</div>
			<div className='right-bar'>
				<header>
					<h1>Najświeższe wieści ze świata</h1>
					<span>Dołącz już dziś.</span>
				</header>
				<form className='sign-in-form'>
					<span>Nazwa użytkownika</span>
					<input type='text' placeholder='username' />
					<span>Hasło</span>
					<input type='text' placeholder='password' />
					<input type='submit' value='Zaloguj się' />
				</form>
			</div>
		</main>
	);
};

export default page;
