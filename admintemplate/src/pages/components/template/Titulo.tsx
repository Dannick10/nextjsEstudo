import React from 'react'

type TituloProps = {
    titulo: string
    subtitulo: string 
}
const Titulo = (props: TituloProps) => {
  return (
    <div>
        <h1 className={`
        
        `}>{props.titulo}</h1>
        <h2 className={``}>{props.subtitulo}</h2>
    </div>
  )
}

export default Titulo