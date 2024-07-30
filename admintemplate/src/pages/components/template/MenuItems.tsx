import React from 'react'

type MenuItemProps = {
    url: string
    texto: string 
    icone: any
}

const MenuItems = (props: MenuItemProps) => {
  return (
    <li className={``}>
            {props.icone}
    </li>
  )
}

export default MenuItems