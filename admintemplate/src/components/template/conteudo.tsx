import React from 'react'

type ConteudoProps = {
    children?: any
}

const Conteudo = (props: ConteudoProps) => {
  return (
    <div className='flex flex-col mt-7'>
        {props.children}
    </div>
  )
}

export default Conteudo