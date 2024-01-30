'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const CustomSelect = ({ text, options }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedOption, setSelectedOption] = useState();

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<div className='relative'>
			<button
				className='hover:bg-gray-800 p-5 py-2 rounded-lg flex gap-2'
				onClick={toggleModal}
			>
				{text}
				<icon>↑</icon>
			</button>
			{modalVisible && (
				<div
					className='bg-gray-900 rounded-lg p-5 absolute -bottom-100 left-0 mt-5'
					onClick={toggleModal}
				>
					{text}
					<div className='flex flex-col gap-5'>
						{options.map(option => (
							<Link href={option} key={option} className='option'>
								{option}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
