import React from 'react'
import MenuItems from './MenuItems'
import { IconeAjustes, IconeCase, IconeSino } from '../icons'
import Logo from './Logo'


const MenuLateral = () => {
  return (
    <div className={``}>
      <div className={`bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20 flex flex-col items-center justify-center`}>
        <Logo/>
      </div>
      <ul>
          <MenuItems url='/' texto='Inicio' icone={IconeCase} />
          <MenuItems url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
          <MenuItems url='/notificacoes' texto='Notificações' icone={IconeSino}/>
      </ul>
      </div>
  )
}

export default MenuLateral