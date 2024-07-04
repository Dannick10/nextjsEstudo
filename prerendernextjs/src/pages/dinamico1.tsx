import React from 'react'

export function getServerSideProps() {
    console.log('[server] gerando props para o componente')
    return {
        props: {
            numero: Math.random()
        }
    }
}

type Props = {
    numero: number
}

const dinamico1 = (props: Props) => {
  return (
    <div>
        <h1 className='text-lime-400 text-2xl text-center'>Dinamico #01</h1>
        <p>{props.numero}</p>
    </div>
  )
}

export default dinamico1