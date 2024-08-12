import React from 'react'
import Titulo from './Titulo'
import BotaoAlternar from './BotaoAlternar'
import useAppdata from '@/data/hook/useAppdata'
import AvatarUsuario from './AvatarUsuario'

type CabecalhoProps = {
    titulo: string
    subtitulo: string 
}

const Cabecalho = (props: CabecalhoProps) => {
  
  const {tema, alternarTema} = useAppdata()

  return (
    <div className='flex'>
       <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
       <div className={`flex flex-grow justify-end items-center gap-3`}>
        <BotaoAlternar tema={tema} alternarTema={alternarTema}/>
        <AvatarUsuario />
       </div>
    </div>
  )
}

export default Cabecalho