import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const buscar = () => {

  const router = useRouter()

  const codigo = router.query
  const nome = router.query.nome
  console.log(codigo)

  return (
    <div>
        <h1 className='bg-black'>rotas / id / buscar</h1>
        <Link href='/'>
          Voltar
        </Link>
    </div>
  )
}

export default buscar