import React, {useState} from 'react'

type Props = {}

const formulario = (props: Props) => {

    const [valor,SetValor] = useState<string>('')

    const alterar = ():void => {
        SetValor(valor + '!')
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <input type="text" value={valor} onChange={(e) => SetValor(e.target.value)}/>
        <span>{valor}</span>
        <button onClick={alterar}>Alterar input</button>
    </div>
  )
}

export default formulario