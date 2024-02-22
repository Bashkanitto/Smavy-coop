import { About } from '@/components/About';
import { Booking } from '@/components/Booking';
import { Catch } from '@/components/Catch';
import { Covers } from '@/components/Covers';
import { Hero } from '@/components/Hero';
import { Report } from '@/components/Report';
import { Solutions } from '@/components/Solutions';
import { Tax } from '@/components/Tax';
import { Posts } from '@/components/Posts'

export default function App() {
	return (
		<>
			<Hero />
			<About />
			<Covers />
			<Report />
			<Booking />
			<Tax />
			<Catch />
			<Solutions />
			<Catch />
		</>
	);
}
