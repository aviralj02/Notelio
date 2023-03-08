import React from 'react'
import { inter } from '@/lib/utils/get-class'

type Props = {}

const NoteCard = (props: Props) => {
  return (
    <div className='flex flex-col bg-[#181818] border-[#303030] border-[1px] rounded-[9px] px-6 py-8 max-w-xs max-h-56'>
      <h1 className='inter font-[400] text-[#ffffff] text-[20px]'>
        NOTE TITLE
      </h1>
      <p className='inter font-[400] text-[11px] leading-[13px] text-[#6f6f6f] mt-2'>
        Created • Month Date, Year
      </p>
      <hr className='border-[1px] h-px border-[#2e2e2e] mt-2' />
      <p className='inter font-[500] text-[16px] leading-[19px] text-[#a1a1a1] mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fineits wasnot me but yesits.
      </p>
    </div>
  )
}

export default NoteCard