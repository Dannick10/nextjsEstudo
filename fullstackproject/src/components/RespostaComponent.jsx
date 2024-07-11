import React from 'react'

const RespostaComponent = ({resposta,letra,indice,corletra}) => {

  console.log(resposta)
  return (
    <div className='flex'>

        <div className=''>
            <div className=''>
                {resposta.valor}
            </div>
        </div>

        <div className=''>
            {letra}
        </div>

    </div>
  )
}

export default RespostaComponent