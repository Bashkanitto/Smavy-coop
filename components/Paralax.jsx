'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const Paralax = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Image
			src={'/iPhone.png'}
			width={200}
			height={200}
			style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
			className={'absolute top-0 right-0'}
			objectFit='contain'
			alt='pizza img'
		/>
	);
};
