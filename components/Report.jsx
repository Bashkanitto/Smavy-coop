import React from 'react';
import { content } from './Text';
import { LearnButton } from './LearnButton';
import Image from 'next/image';

export const Report = () => {
	const { report } = content;
	return (
		<section id='report' className='grid grid-cols-2 mt-40 items-center'>
			<div className='flex flex-col items-start gap-5 w-[90%]'>
				<h1 className='font-bold text-3xl text-primary'>{report.h6}</h1>
				<p>{report.p}</p>
				<LearnButton bg='#15dad3' />
			</div>
			<Image src={report.img} width={500} height={500} alt='report' />
		</section>
	);
};
