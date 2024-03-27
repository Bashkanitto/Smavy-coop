"use client"

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Menu } from 'lucide-react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="py-4">
		  <nav className="container mx-auto flex justify-between items-center md:hidden relative">
			<img src="smavy2.png" className="absolute left-6 top-1 h-4 md:h-7" />
				<button onClick={toggleMenu} className="text-black focus:outline-none">
					<Menu className="absolute right-6"/>
				</button>
		  	</nav>
		  	<nav className={`container mx-auto ${isOpen ? 'block' : 'hidden'} md:flex relative items-center border rounded-[20px] border-gray-200 bg-gray-200 h-12`}>
		  		<img src="smavy2.png" className="absolute left-6 top-1 h-4 md:h-7" />
				<ul className="absolute left-32 flex gap-4 text-black text-xs">
			  		<li><a>О нас</a></li>
			  		<li><a>Услуги</a></li>
			  		<li><a>Портфолио</a></li>
			  		<li><a>FAQ</a></li>
			  		<li><a>Контакты</a></li>
				</ul>
				
				<button className="absolute right-6 bg-primary text-white text-xs rounded-full w-32 h-8 flex items-center justify-center">
  					Оставить заявку
  					<ArrowUpRight className="w-4 h-4 ml-1" />
				</button>
		  	</nav>
		</header>
	  );
};

export default Header;


