'use client';
import Image from 'next/image';
import React from 'react';
import { content } from './Text';
import { ArrowRight } from 'lucide-react';

export const About = () => {
	return (
		<section id='about' className='grid grid-cols-1 mt-40'>
			<p className='font-bold text-white text-md'>
				HOW UPLINQ IS CHANGING THE ACCOUNTING INDUSTRY
			</p>
			<div className='grid grid-cols-3 mt-10 gap-0.5 shadow-xl bg-neutral-700'>
				{content.about.map(item => (
					<div key={item.id} className='p-7 flex flex-col gap-5 bg-[#1b1b1e]'>
						<h6 className='font-bold'>{item.h6}</h6>
						<p className=''>{item.p}</p>

						<Image src={item.img} width={400} height={200} alt='bg' />

						<button className='text-green-300 text-xs flex gap-1 justify-end items-center float-right text-right'>
							Learn more <ArrowRight />
						</button>
					</div>
				))}
			</div>
		</section>
	);
};
