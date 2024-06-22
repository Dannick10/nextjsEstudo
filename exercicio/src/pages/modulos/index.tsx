import React from 'react'
import {Comp1 as Aoba, Comp2, Comp4, Comp5} from '../../components/module/funcionais'
import Comp3 from '../../components/module/funcionais'

type Props = {}

const index = (props: Props) => {
  return (
    <div>
        <Aoba/>
        <Comp2/>
        <Comp3/>
        <Comp4/>
        <Comp5/>
    </div>
  )
}

export default index