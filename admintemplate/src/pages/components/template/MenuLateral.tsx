import React from 'react'
import MenuItems from './MenuItems'
import { IconeAjustes, IconeCase, IconeSino } from '../icons'


const MenuLateral = () => {
  return (
    <div className=''>
      <ul>
          <MenuItems url='/' texto='Inicio' icone={IconeCase} />
          <MenuItems url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
          <MenuItems url='/notificacoes' texto='Notificações' icone={IconeSino}/>
      </ul>
      </div>
  )
}

export default MenuLateral