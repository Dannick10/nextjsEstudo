import React from 'react'

type TitleTableProps = {
    titulo: string
}

const TitleTable = (props: TitleTableProps) => {
  return (
    <div className={`flex flex-col justify-center`}>
        <h1 className='pl-7 px-2 text-xl'>{props.titulo}</h1>
        <hr className='border-2 border-purple-500'/>
    </div>
  )
}

export default TitleTable