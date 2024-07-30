import React from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './conteudo'

type LayoutProps = {
    titulo: string
    subtitulo: string 
    children?: any
}

const Layout = (props: LayoutProps) => {
  return (
    <div className='flex h-screen w-screen'>
        <MenuLateral />
        <div className='flex w-full flex-col bg-gray-300 p-7'>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
        <Conteudo>
          {props.children}
        </Conteudo>
        </div>
    </div>
  )
}

export default Layout