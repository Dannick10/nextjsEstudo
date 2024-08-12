import React from 'react'
import Link from 'next/link'
import useAuth from '@/data/hook/useAppAuth'
import { IconeUsuario } from '../icons'

type Props = {}

const AvatarUsuario = (props: Props) => {
    const { usuario } = useAuth()

    console.log(usuario)
  return (
    <Link href={'/perfil'}> 
            {usuario?.imageUrl ? 
            <img src={usuario?.imageUrl} alt='avatar' className='h-10 w-10 flex items-center justify-center rounded-full'/>
        :
        <span className='h-10 w-10 flex items-center justify-center rounded-full'>
            {IconeUsuario}
        </span>}

    </Link>
  )
}

export default AvatarUsuario