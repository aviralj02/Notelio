import React from 'react'
import { inter, poppins } from '@/lib/utils/get-class';
import Link from 'next/link';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='px-8 max-w-3xl mx-auto'>
        <div className='flex mt-10 justify-between'>
            <div>
                <h1 className='${poppins} font-[600] text-[24px] text-[#fff] leading-[36px]'>
                    Notelio
                </h1>
            </div>
            <div className='flex gap-3 items-center'>
                <Link 
                    href=''
                    className='${inter} underline underline-offset-4 text-[#a4a2a2]'
                >
                    Create Note
                </Link>
                
                <button className='w-[92px] h-[33px] bg-[#1e1e1e] rounded-[6px] text-[#8e8989]'>
                    Profile
                </button>
            </div>
        </div>
        <hr className="border-[1px] h-px border-[#414040] mt-[19px]" />
    </div>
  )
}

export default Navbar