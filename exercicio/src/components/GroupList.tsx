import React from 'react'
import Item from './Item'

type props = {
  children: JSX.Element
}

const GroupList = (props: props) => {

  return (
    <ul> 
      {props.children}
    </ul>
  )
}

export default GroupList