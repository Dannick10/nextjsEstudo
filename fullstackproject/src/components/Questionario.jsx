import React from 'react'
import QuestComponent from './QuestComponent'
import Button from './Button'


const Questionario = ({questao,ultima,questaoRespondida,irProproximopasso}) => {

    const respostafornecida = (indice) => {
        if(props.questao.questaoRespondida){
            questaoRespondida(questao.responderCom(indice))
        }
    }

  return (
    <div className='flex'>
        {props.questao ? 
        <QuestComponent props={questao} respostafornecida={respostafornecida} tempoesgotado={6}/>
        : false}
        <Button onclickProps={irProproximopasso} texto={ultima ?'Finalizar' : 'Próxima'}/>
    </div>
  )
}

export default Questionario