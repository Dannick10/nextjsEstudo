import React from 'react'

const Presente = () => {
  return (
    <div className='flex flex-col items-center relative'>
        <div className='w-[100px] h-[30px] bg-[#7aa944]'></div>
        <div className='w-[90px] h-[60px] bg-lime-700'></div>
        <div className='bg-red-600 w-[15px] h-[90px] absolute bottom-0'></div>
        <div className='bg-red-600 w-[90px] h-[15px] absolute top-[40px]'></div>
    </div>
  )
}

export default Presente