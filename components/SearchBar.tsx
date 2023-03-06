import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='flex justify-center max-w-3xl mx-auto'>
        <input 
            type='text' 
            placeholder='Search Notes...'
            className='bg-[#1B1B1B] mt-[60px] w-[680px] h-[50px] border-2 border-[#2d2d2d] rounded-[13px] text-white placeholder:text-[#989898]'
        />
    </div>
  )
}

export default SearchBar