import React from "react";
import Link from "next/link";

type MenuItemProps = {
  url?: string;
  texto: string;
  icone: any;
  onClick?: (event: any) => void;
  classname?: string
};

const MenuItems = (props: MenuItemProps) => {
  const renderizarConteudo = () => {
    return (
      <p className="flex flex-col justify-center items-center h-20 w-full">
        {props.icone}
        <span className={`text-xs font-light`}>
          {props.texto}
        </span>
      </p>
    );
  };

  return (
    <li className={`hover:bg-green-100 text-gray-600 ${props.classname}`}>
      {props.url ? (
        <Link href={props.url}>
          {renderizarConteudo()}
          </Link>
      ) : (
        <li
          className={`cursor-pointer`}
          onClick={props.onClick}
        >
          {renderizarConteudo()}
        </li>
      )}
    </li>
  );
};

export default MenuItems;
