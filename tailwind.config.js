/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#6100FF',
				secondary: '#b1b1b2',
			},
			boxShadow: {
				xl: '0 0px 50px rgba(255, 240, 255, 0.3)',
				button: '0 0px 10px rgba(255, 240, 255, 0.3)',
			},
		},
	},
	plugins: [],
};
