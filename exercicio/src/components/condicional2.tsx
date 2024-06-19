import React from 'react'

type Props = {
    teste: boolean
    children: string
}

const Condicional2 = (props: Props) => {
    if(props.teste){
        return props.children
    } else {
        return null
    }
}

export default Condicional2