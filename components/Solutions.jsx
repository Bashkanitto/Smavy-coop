import Image from 'next/image';
import React from 'react';
import { content } from './Text';
import { ArrowRight } from 'lucide-react';
import { Paralax } from './Paralax';

export const Solutions = () => {
	return (
		<section
			id='about'
			className='flex flex-col  gap-10 relative grid grid-cols-1 mt-40'
		>
			<p className='font-bold text-white text-md'>
				HOW UPLINQ IS CHANGING THE ACCOUNTING INDUSTRY
			</p>
			<h6 className='text-5xl'>
				Discover The <br /> Future with our <br /> Cutting-Edge Web platform
			</h6>
			<Paralax />
		</section>
	);
};
