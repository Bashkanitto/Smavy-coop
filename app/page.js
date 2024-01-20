import TypingText from '@/components/TypingText';
import Image from 'next/image';

export default function Hero() {

	return (
		<section className='grid grid-cols-2 mt-20'>
			<div>
				<h1 className='font-bold text-white text-6xl'>
					Кодируй свои мечты в 
				</h1>
			<TypingText className='preCursor font-bold text-6xl  text-[#6100FF]'>реальность</TypingText>
				<p className='mt-4 text-gray-500'>
					Pizza is the missing that makes every day complete, a simple yet
					delicios joy in life
				</p>
				<div className='flex gap-4'>
					<button className='bg-primary text-white flex-gap-2 px-8 py-2 rounded-full'>
						Order now
					</button>
					<button>Learn more </button>
				</div>
			</div>
			
			<Image
				src={'/HeroBg.png'}
				width={600}
				height={600}
				className='absolute left-1/2 animate-[spin_100000ms_linear_infinite]'
				objectFit='contain'
				alt='pizza img'
			/>
			<Image
				src={'/gr1.png'}
				width={1200}
				height={1000}
				className='absolute -z-10 animate-[spin_100000ms_linear_infinite] opacity-70'
				objectFit='contain'
				alt='pizza img'
			/>
		</section>
	);
}
