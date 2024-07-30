import React from 'react'
import Titulo from './Titulo'

type CabecalhoProps = {
    titulo: string
    subtitulo: string 
}

const Cabecalho = (props: CabecalhoProps) => {
  return (
    <div className=''>
       <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
    </div>
  )
}

export default Cabecalho