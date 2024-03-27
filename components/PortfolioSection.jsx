import React from 'react';
import { CustomButton } from './CustomButton';

const PortfolioSection = () => {
	const portfolioList = [
		{
			img: 'portfolio1.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			img: 'portfolio2.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			img: 'portfolio3.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			img: 'portfolio1.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			img: 'portfolio1.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
	];

	return (
		<section className='flex flex-col items-center gap-5'>
			<h4 className='text-4xl font-medium'>Портфолио</h4>
			<p className='w-2/3 lg:w-full text-xs text-center'>
				Здесь мы с гордостью представляем некоторые из наших лучших <br />{' '}
				проектов, над которыми мы работали с нашими уважаемыми клиентами.
			</p>
			<div className='flex gap-10 w-[100%] overflow-scroll px-10 lg:px-20 '>
				{portfolioList.map(item => (
					<div
						key={item}
						className='flex flex-col gap-5 max-w-[300px] min-w-[300px] items-center lg:items-start'
					>
						<div className='flex relative'>
							<img
								src={item.img}
								alt='website example'
								className='rounded-[40px]'
							/>
							<div className='z-10 absolute bottom-0 flex flex-col items-start text-white p-5 gap-2 text-sm'>
								<button className='white-btn'>{item.project.type1}</button>
								<button className='white-btn'>{item.project.type2}</button>
								<button className='white-btn'>{item.project.type3}</button>
							</div>
						</div>
						<div className='pl-2'>
							<h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
							<p className='text-xs text-secondary'>{item.description}</p>
						</div>
						<CustomButton>Подробнее</CustomButton>
					</div>
				))}
			</div>
		</section>
	);
};

export default PortfolioSection;
