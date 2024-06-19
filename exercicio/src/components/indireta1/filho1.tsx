import React from 'react'


type Props = {
    funcao: Function
}

const Filho1 = (props: Props) => {


  return (
    <div>
        <button onClick={(e) => {props.funcao('opa','eba',2)}}>Filho</button>
    </div>
  )
}

export default Filho1