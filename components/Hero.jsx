import React from 'react';
import TypingText from './TypingText';
import Image from 'next/image';

export const Hero = () => {
	return (
		<section className='grid grid-cols-2 mt-10'>
			<div>
				<h1 className='font-bold text-6xl pl-2'>Кодируй свои мечты в</h1>
				<TypingText className='preCursor font-bold text-6xl pl-2 text-[#6100FF]'>
					реальность
				</TypingText>
				<div className='border-l px-10 my-10'>
					<p className='mt-4 my-3'>
						Uplinq integrates AI with dedicated accounting specialists to
						deliver unparalleled quality with minimal fuss. Keep your records
						current, translate data into actionable insights, and receive
						advanced financial intelligence at your fingertips.
					</p>
					<div className='flex gap-4'>
						<button className='bg-primary text-white flex-gap-2 px-8 py-2 rounded-md shadow-button'>
							Order now
						</button>
						<button className='bg-transparent border text-white px-8 py-2 rounded-md'>
							Learn more
						</button>
					</div>
				</div>
			</div>

			<Image
				src={'/bgg.png'}
				width={700}
				height={700}
				className='absolute left-1/2 -bottom-10'
				objectFit='contain'
				alt='pizza img'
			/>
			<Image
				src={'/bg.png'}
				width={1200}
				height={1000}
				className='absolute -z-10 animate-[spin_100000ms_linear_infinite] opacity-70'
				objectFit='contain'
				alt='pizza img'
			/>
		</section>
	);
};
