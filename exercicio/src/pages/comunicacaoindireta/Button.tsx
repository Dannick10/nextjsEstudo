import React, { useState} from 'react'

type Props = {
    
}

const Button = (props: Props) => {

    const [click,Setclick] = useState(false)

    const action = (e: React.MouseEvent<HTMLButtonElement>) => {
       Setclick(click ? false : true)
       console.log(e)
    }

  return (
    <div>
        <input type="text" onChange={(e) => console.log(e.target.innerHTML)} />
        <button onClick={action}>Click #01</button>
        <button onClick={() => Setclick(click ?false :true)}>Click #02</button>
        {click ? 'ta clicado' : 'desclicado'}
    </div>
  )
}

export default Button