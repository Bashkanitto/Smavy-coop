import React from 'react';

export const Footer = () => {

	return (
		<footer className='flex bg-[#0e0e0f] h-50 text-white justify-between items-center px-40'>
			<div className='solutions'>
				<h4 className='text-4xl'>Smavy</h4>
				<ul>
					<li>
						<a href='#'>Automated</a>
					</li>
					<li>
						<a href='#'>Catch</a>
					</li>
					<li>
						<a href='#'>Tax</a>
					</li>
					<li>
						<a href='#'>Pricing</a>
					</li>
				</ul>
			</div>

			<div className='flex gap-20'>
				<div className='text-secondary'>
					<h4>Solutions</h4>
					<ul>
						<li>
							<a href='#'>Automated</a>
						</li>
						<li>
							<a href='#'>Catch</a>
						</li>
						<li>
							<a href='#'>Tax</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
					</ul>
				</div>

				<div className='text-secondary'>
					<h4>Company</h4>
					<ul>
						<li>
							<a href='#'>FaQs</a>
						</li>
						<li>
							<a href='#'>Career</a>
						</li>
						<li>
							<a href='#'>Security</a>
						</li>
						<li>
							<a href='#'>Our story</a>
						</li>
						<li>
							<a href='#'>Brand</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
