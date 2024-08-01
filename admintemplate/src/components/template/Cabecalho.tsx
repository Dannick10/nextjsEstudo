import React from 'react'
import Titulo from './Titulo'
import BotaoAlternar from './BotaoAlternar'
import useAppdata from '@/data/hook/useAppdata'

type CabecalhoProps = {
    titulo: string
    subtitulo: string 
}

const Cabecalho = (props: CabecalhoProps) => {
  
  const {tema, alternarTema} = useAppdata()

  return (
    <div className='flex'>
       <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
       <div className={`flex flex-grow justify-end`}>
        <BotaoAlternar tema={tema} alternarTema={alternarTema}/>
       </div>
    </div>
  )
}

export default Cabecalho