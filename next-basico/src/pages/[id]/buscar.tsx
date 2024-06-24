import React from 'react'
import { useRouter } from 'next/router'

const buscar = () => {

  const router = useRouter()

  const codigo = router.query
  const nome = router.query.nome
  console.log(codigo)

  return (
    <div>
        <h1>rotas / id / buscar</h1>
    </div>
  )
}

export default buscar