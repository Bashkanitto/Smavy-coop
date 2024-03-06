import React from 'react';

export const CustomButton = ({ children }) => {
	return (
		<button className='bg-primary text-white rounded-3xl w-40 h-[50px] ml-1'>
			{children}
		</button>
	);
};
