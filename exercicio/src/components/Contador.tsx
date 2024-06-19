'use client'

import React, { useState } from 'react'

type Props = {}

const Contador = (props: Props) => {

const [ number, SetNumber ] = useState<number>(0)


  return (
    <div>
        Number: {number}
        <button onClick={() => SetNumber(number + 1)}>+</button>
        <button onClick={() => SetNumber(number > 0 ? number - 1: number)}>-</button>
    </div>
  )
}

export default Contador