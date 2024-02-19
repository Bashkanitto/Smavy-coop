import Image from 'next/image';
import React from 'react';
import { content } from './Text';
import { ArrowRight } from 'lucide-react';

export const Covers = () => {
	const { covers } = content;
	return (
		<section className='mt-40'>
			<div key={covers.id} className='p-7 flex flex-col gap-5'>
				<h1 className='text-3xl text-center m-auto'>
					{covers.h5}
					<br />
					<span className='text-primary'>{covers.h6}</span>
				</h1>
				<p className='w-[55%] m-auto text-center'>{covers.p}</p>
			</div>
		</section>
	);
};
