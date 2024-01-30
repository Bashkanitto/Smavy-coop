import Link from 'next/link';
import CustomSelect from './CustomSelect';

export default function Header() {
	return (
		<header className='fixed text-white z-40 w-full h-20 flex items-center justify-between backdrop-blur px-40'>
			<nav className='flex items-center gap-10 text-white'>
				<Link className='text-white text-4xl' href=''>
					ggg
				</Link>
				<CustomSelect text='Solutions' options={['asd', 'bbb']} />
				<Link href='/price' className='hover:bg-gray-800'>
					Price
				</Link>
				<CustomSelect text='Company' options={['asd', 'bbb']} />
			</nav>
			<div className='flex gap-10'>
				<Link href='./'>About</Link>
				<Link href='./'>Login</Link>
			</div>
		</header>
	);
}
