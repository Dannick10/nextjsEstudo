import React, { useState } from 'react'
import Entrada from './Entrada'
import Botao from './Botao'
import Cliente from '@/model/cliente'

type FormularioTableProps = {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}



const FormularioTable = (props: FormularioTableProps) => {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ??'')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div className='flex flex-col gap-2'>
        {id?  (
            <Entrada texto='Código' valor={id} somenteLeitura={true}/>
        ) : false}

        <Entrada texto='nome' valor={nome} valormudou={setNome}/>
        <Entrada texto='idade' valor={idade} tipo='number' valormudou={setIdade}/>
        <div className='flex'>
        <Botao className='m-2' cor='bg-green-500' onclick={() => props.clienteMudou?.(new Cliente(nome,idade, id))}>{id ? 'alterar': 'salvar'}</Botao>
        <Botao className='m-2' cor='bg-red-500' onclick={props.cancelado}>Cancelar</Botao>
        </div>
    </div>
  )
}

export default FormularioTable