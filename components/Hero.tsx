import Link from 'next/link';
import React from 'react';
import { inter, poppins } from '@/lib/utils/get-class';

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className="flex flex-col gap-6 justify-center items-center h-screen px-4">
			<div className="flex flex-col gap-5">
				<h1
					className={`text-8xl text-left sm:text-9xl ${poppins} font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400`}
				>
					Notelio
				</h1>
				<p
					className={`${inter} text-xl text-[#C8C8C8] sm:max-w-md text-left sm:text-center max-w-full`}
				>
					A comprehensive note taking application. Made with <span className="text-red-500">❤</span>{' '}
					by <span className="text-[#EAEAEA] font-semibold">Sanyam</span> &{' '}
					<span className="text-[#EAEAEA] font-semibold">Aviral</span>
				</p>
			</div>
			<div
				className={`cursor-pointer ${inter} text-[#EAEAEA] transition-all flex gap-3 items-center hover:gap-4 w-full sm:justify-center`}
			>
				<Link
					href="#"
					target="_blank"
					rel="noreferrer"
					className="underline underline-offset-4 text-xl transition hover:text-[#eaeaeab0]"
				>
					Start Taking Notes
				</Link>
				<span className="text-2xl">→</span>
			</div>
		</div>
	);
};

export default Hero;
