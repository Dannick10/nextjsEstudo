import React from 'react'

type Props = {
    numero: number
}

const Renderizacao = (props: Props) => {
    if(props.numero % 2 == 0 ){
        return <h1>{props.numero}</h1>
    } else {
        return null
    }
}

export default Renderizacao