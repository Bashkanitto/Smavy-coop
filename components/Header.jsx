import Link from 'next/link';

export default function Header() {
	return (
		<header className='fixed z-40 w-full h-20 flex items-center justify-between backdrop-blur px-40'>
			<Link className='text-white font-semibold text-2xl' href=''>
				Smavy
			</Link>
			<nav className='flex items-center gap-10 font-semibold text-white'>
				<Link href='./'>Main</Link>
				<Link href='./'>Menu</Link>
				<Link href='./'>Contact</Link>
				<Link href='./'>About</Link>
				<Link
					className='bg-primary rounded-full text-white px-8 py-2'
					href='./'
				>
					Login
				</Link>
			</nav>
		</header>
	);
}
