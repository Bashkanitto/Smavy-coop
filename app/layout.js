import '@/globals.css';
import Header from '@/components/Header';

export const metadata = {
	title: 'Smavy Coop',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<main className='max-w-6xl mx-auto pt-80 p-4 z-20'>{children}</main>
			</body>
		</html>
	);
}
