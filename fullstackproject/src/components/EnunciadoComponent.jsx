import React from 'react'

const EnunciadoComponent = ({text}) => {

  return (
    <div className='flex'>
        <div className='text-4xl font-semibold'>
            {text}
        </div>

    </div>
  )
}

export default EnunciadoComponent