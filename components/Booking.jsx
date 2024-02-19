import React from 'react';
import { content } from './Text';
import { LearnButton } from './LearnButton';
import Image from 'next/image';

export const Booking = () => {
	const { booking } = content;
	return (
		<section className='grid grid-cols-2 mt-40 items-center'>
			<Image src={booking.img} width={500} height={500} alt='report' />
			<div className='flex flex-col items-start gap-5 w-[90%]'>
				<h1 className='font-bold text-3xl text-primary'>{booking.h6}</h1>
				<p>{booking.p}</p>
				<LearnButton bg='#15dad3' />
			</div>
		</section>
	);
};
