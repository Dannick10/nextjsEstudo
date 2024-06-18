import React from 'react'
import ListProdutos from '@/data/ListProdutos'

type Props = {}

const RenderProduct = (props: Props) => {

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>codigo</th>
                    <th>nome</th>
                    <th>ctexto</th>
                </tr>
            </thead>
            <tbody>
                {ListProdutos.map((product) => (<>
                    <tr >
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.preco}</td>
                   
                    </tr>
                </>))}
            </tbody>
        </table>

    </div>
  )
}

export default RenderProduct