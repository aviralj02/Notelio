import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<div className='flex justify-center ss:items-center items-start mt-[200px] flex-col'>
        <h1
          className='flex justify-center font-poppins w-[466px] ss:text-[128px] text-[80px] font-[700] leading-[192px] bg-gradient-to-r from-[#CF4E5D] to-[#AE4ECF] text-transparent bg-clip-text'
        >
          Notelio
        </h1>
        <div className='flex items-center w-[400px] h-[200px] flex-col'>
          <p className='font-inter text-[20px] leading-[24px] font-[500] ss:text-center text-[#c8c8c8]'>
            A comprehensive note 
            <br className='ss:hidden block' /> taking application. <br /> Made with 
            <span className='text-[#d74d4d]'> ♥ </span> <br className='ss:hidden block' />
            By 
            <span className='text-[#eaeaea] font-[700]'> Sanyam </span> and 
            <span className='text-[#eaeaea] font-[700]'> Aviral </span>
          </p>
          <div className='flex flex-row'>
            <Link 
              href=''
              className='font-inter text-[#eaeaea] mt-[40px] font-[500] text[20px] border-b-2'
            >
              Start taking notes
            </Link>
            <p className='mt-[40px] ml-[8px] text-[#eaeaea]'> ➔ </p>
          </div>
        </div>
      </div>
		</div>
	);
}
