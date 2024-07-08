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

export function getStaticProps() {
    return {
        props: {}
    }
}

type Props = {}

const id = (props: Props) => {
  return (
    <div>
        <h1>Detalhe do Aluno</h1>
    </div>
  )
}

export default id