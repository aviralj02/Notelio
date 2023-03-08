import React from 'react'
import Search from '../public/assets/search-btn.png'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='flex justify-center max-w-3xl mx-auto'>
      <div className='relative mt-[60px] w-full mx-1'>
        <div className='absolute left-0 inset-y-0 flex items-center pl-5 pointer-events-none'>
            <img 
              src={Search.src}  
              alt="search"
              className='w-[14px] h-[14px]'
            />
          </div>
          <input 
              type='search' 
              placeholder='Search Notes...'
              className='block bg-[#1B1B1B] pl-12 pr-2 w-full h-[50px] border-2 border-[#2d2d2d] rounded-[13px] text-white placeholder:text-[#989898] focus:border-[#2d2d2d]'
          />
      </div>
    </div>
  )
}

export default SearchBar