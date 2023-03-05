import { Inter, Poppins } from 'next/font/google';

const fontInter = Inter({
	weight: ['700', '500'],
	subsets: ['latin'],
});

const fontPoppins = Poppins({
	weight: ['400', '500', '800'],
	subsets: ['latin'],
});

export const poppins = fontPoppins.className;
export const inter = fontInter.className;
