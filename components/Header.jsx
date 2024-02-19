import Link from 'next/link';
import CustomSelect from './CustomSelect';

export default function Header() {
	return (
		<header className='fixed text-white z-40 w-full h-20 flex items-center justify-between backdrop-blur px-40'>
			<nav className='flex items-center text-white'>
				<Link className='text-white text-4xl' href='/'>
					Smavy
				</Link>
				<Link href='#about'>About</Link>
				<Link href='#report'>Report</Link>
				<Link href='/price'>Price</Link>
			</nav>
		</header>
	);
}
