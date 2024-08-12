import React from "react";
import MenuItems from "./MenuItems";
import { IconeAjustes, IconeCase, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import useAuth from "@/data/hook/useAppAuth";


const MenuLateral = () => {

  const { logout } = useAuth()

  return (
    <aside className={`flex flex-col dark:bg-gray-900 dark:text-gray-200`}>
      <div
        className={`bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20 flex flex-col items-center justify-center`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItems url="/" texto="Inicio" icone={IconeCase} />
        <MenuItems url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItems url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItems  texto="Sair" icone={IconeSair} onClick={logout} classname="text-red-600 hover:bg-red-400 hover:text-white dark:text-red-300"/>
      </ul>
    </aside>
  );
};

export default MenuLateral;
