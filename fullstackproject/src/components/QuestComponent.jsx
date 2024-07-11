import React from 'react'
import EnunciadoComponent from './EnunciadoComponent'

const QuestComponent = ({props}) => {
  console.log(props._enunciado)

  return (
    <div className='flex flex-col items-center gap-2'>
      <EnunciadoComponent text={props._enunciado}/>
    </div>
  )
}

export default QuestComponent