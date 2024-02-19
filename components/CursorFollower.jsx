'use client';
import React, { useRef, useEffect } from 'react';

const CursorFollower = () => {
	const cursorRef = useRef(null);
	const innerCursorRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = e => {
			cursorRef.current.style.left = `${e.x}px`;
			cursorRef.current.style.top = `${e.y}px`;
			innerCursorRef.current.style.left = `${e.x}px`;
			innerCursorRef.current.style.top = `${e.y}px`;
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<>
			<div
				ref={cursorRef}
				style={{
					transition: '0.07s',
				}}
				className='absolute pointer-events-none border-2 border-gray-500 rounded-full w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-50'
			></div>
			<div
				ref={innerCursorRef}
				className='absolute pointer-events-none bg-white rounded-full w-2 h-2 z-50'
				style={{
					transform: 'translate(-4px, -4px)',
					transition: '0.01s',
				}}
			></div>
		</>
	);
};

export default CursorFollower;
