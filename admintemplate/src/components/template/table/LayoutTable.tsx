import React from 'react'
import TitleTable from './TitleTable'

type LayoutProps = {
    titulo: string 
    children?: any
}

const LayoutTable = (props: LayoutProps) => {
  return (
    <div className={`flex flex-col w-2/3 bg-white text-gray-800 p-0.5`}>
        <TitleTable titulo='Cadastro simples'/>
        <div className='p-7'>
            {props.children}
        </div>
    </div>

)
}

export default LayoutTable