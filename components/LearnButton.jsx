'use client';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export const LearnButton = ({ bg }) => {
	return (
		<button
			onClick={() => console.log(bg)}
			// style={{ background: bg }}
			className={`flex items-center bg-primary p-3 rounded-md shadow-button shadow-primary`}
		>
			Learn more <ArrowRight />
		</button>
	);
};
