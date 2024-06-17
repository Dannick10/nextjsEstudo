import React from 'react'
import Tsx2component from './tsx2component'

const PrimeiroComponent = () => {

    const array = [
        <li>Paulo</li>,
        <li>Ana</li>,
        <li>pedro</li>,
    ]

  return (
    <div className='text-center'>
        <h2 className='text-xl font-bold text-slate-600'>Primeiro componente</h2>
        <p className='text-xs'>Criando e exportando o primeiro componente em next</p>
        <Tsx2component/>
            <ul>
            {array.map((e) => e)}
            </ul>
    
    </div>
  )
}

export default PrimeiroComponent