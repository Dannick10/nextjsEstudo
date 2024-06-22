import React from 'react'
import Pessoa from '@/components/Pessoa'

type Props = {}

const exemplo = (props: Props) => {
  return (
    <div>
        <Pessoa nome='Daniel' idade={24}/>
        <Pessoa nome='Mycaela' idade={24}/>
    </div>
  )
}

export default exemplo