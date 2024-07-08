import React from 'react'

export function getStaticPaths() {
    return{
        fallback: false, //404 quando não houver o id
        paths: [
            {params: {id: '107'}},
            {params: {id: '203'}},
            {params: {id: '1345'}},
        ]
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/alunos/107${context.params.id}`)
    const aluno = await res.json()

    return {
        props: {
            aluno
        }
    }
}

type Props = {
    aluno: string
}

const id = (props: Props) => {



  return (
    <div>
        <h1>Detalhe do Aluno</h1>
        <p>id: {props.aluno.id}</p>
        <p>nome: {props.aluno.nome}</p>
        <p>email: {props.aluno.email}</p>
    </div>
  )
}

export default id