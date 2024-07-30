import React from 'react'

const Logo = () => {
  return (
    <div className={`
    bg-white h-14 w-14 rounded-full flex flex-col items-center justify-center gap-1
    `}>
        <div className={`h-4 w-4 rounded-full bg-red-600`}></div>
        <div className={`flex gap-1`}>
        <div className={`h-4 w-4 rounded-full bg-yellow-600`}></div>
        <div className={`h-4 w-4 rounded-full bg-green-600`}></div>

        </div>
    </div>
  )
}

export default Logo