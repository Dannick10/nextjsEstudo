import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const nome = () => {

  const router = useRouter()

  const codigo = router.query.id
  const nome = router.query.nome
  console.log(codigo)

  return (
    <div>
        <h1>rotas / {codigo} / {nome}</h1>
        <Link href='/'>
          Voltar
        </Link>
    </div>
  )
}

export default nome