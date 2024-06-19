import React from 'react'
import Condicional2 from '@/components/condicional2'
import Condicional3 from '@/components/Condicional3'

type Props = {}

const test = (props: Props) => {
  return (
    <div>
        <Condicional2 teste={true} children='sim' />
        <Condicional2 teste={false} children='sim' />
        <Condicional2 teste={true} children='sim' />
        <Condicional2 teste={false} children='sim' />
        <Condicional3 number={2}/>
        <Condicional3 number={3}/>
        <Condicional3 number={4}/>
    </div>
  )
}

export default test