'use client';
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className='container mx-auto p-0 sm:py-4'>
			{/* phone */}
			<nav
				style={{
					transition: '0.5s',
					height: isOpen ? '200px' : '0',
				}}
				className='absolute bg-slate-400 w-full flex justify-between items-center sm:hidden'
			>
				<ul
					style={{
						display: 'flex',
						fontSize: isOpen ? '12px' : '0',
					}}
					className='hidden sm:flex flex-col gap-4 text-black text-xs'
				>
					<Link href='#About'>О нас</Link>
					<Link href='#'>Услуги</Link>
					<Link href='#'>Портфолио</Link>
					<Link href='#'>FAQ</Link>
					<Link href='#'>Контакты</Link>
					<Link></Link>
					Оставить заявку
				</ul>
			</nav>
			<button
				onClick={toggleMenu}
				className='flex sm:hidden text-black focus:outline-none'
			>
				<Menu className='absolute right-6' />
			</button>

			{/* desktop */}
			<nav className='sm:flex hidden justify-between items-center border rounded-[20px] border-gray-200 bg-gray-200 h-12 p-4'>
				<div className='flex gap-5 md:gap-20 items-center'>
					<img src='smavy2.png' className='top-1 h-4 md:h-7' />
					<ul className='flex gap-4 text-black text-xs'>
						<Link href='#About'>О нас</Link>
						<Link href='#'>Услуги</Link>
						<Link href='#'>Портфолио</Link>
						<Link href='#'>FAQ</Link>
						<Link href='#'>Контакты</Link>
					</ul>
				</div>

				<button className='bg-primary text-white text-xs rounded-full w-32 h-8 flex items-center justify-center'>
					Оставить заявку
					<ArrowUpRight className='w-4 h-4 ml-1' />
				</button>
			</nav>
		</header>
	);
};

export default Header;
