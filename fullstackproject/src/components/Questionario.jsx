import React from 'react'
import QuestComponent from './QuestComponent'
import Button from './Button'


const Questionario = ({questao,ultima,questaoRespondida,irProproximopasso, tempoesgotado}) => {

    const respostafornecida = (indice) => {
        if(questao.questaoRespondida){
          questaoRespondida(questao.responderCom(indice))
        }
    }

  return (
    <div className='flex flex-col justify-center gap-2'>
        {questao ? 
        <QuestComponent props={questao} respostafornecida={questaoRespondida} tempoesgotado={tempoesgotado}/>
        : false}
        <Button onclickProps={irProproximopasso} texto={ultima ?'Finalizar' : 'Próxima'}/>
    </div>
  )
}

export default Questionario