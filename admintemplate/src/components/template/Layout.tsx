import React from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './conteudo'
import useAppdata from '@/data/hook/useAppdata'

type LayoutProps = {
    titulo: string
    subtitulo: string 
    children?: any
}

const Layout = (props: LayoutProps) => {
  const { tema } = useAppdata()

  return (
    <div className={`${tema} flex h-screen w-screen`}>
        <MenuLateral />
        <div className='flex w-full flex-col bg-gray-300 p-7 dark:bg-slate-800'>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
        <Conteudo>
          {props.children}
        </Conteudo>
        </div>
    </div>
  )
}

export default Layout