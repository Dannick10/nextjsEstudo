import React from 'react'

type Props = {
    number: number
}

const Condicional3 = (props: Props) => {
    if(props.number % 2 == 0){
        return <h2>Número {props.number} é par</h2>
    } else {
        return <h2>Número {props.number} é impar</h2>
    }
}

export default Condicional3