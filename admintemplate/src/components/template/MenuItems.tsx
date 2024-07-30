import React from "react";
import Link from "next/link";

type MenuItemProps = {
  url?: string;
  texto: string;
  icone: any;
  onClick?: (event: any) => void;
  classname?: string;
};

const MenuItems = (props: MenuItemProps) => {
  const renderizarConteudo = () => {
    return (
      <p className="flex flex-col justify-center items-center h-20 w-full dark:hover:bg-gray-800">
        {props.icone}
        <span className={`text-xs font-light`}>{props.texto}</span>
      </p>
    );
  };

  return (
    <>
      {props.url ? (
        <li className={`hover:bg-green-100 text-gray-600 ${props.classname}`}>
          <Link href={props.url}>{renderizarConteudo()}</Link>
        </li>
      ) : (
        <li className={`cursor-pointer dark:text-red-400`} onClick={props.onClick}>
          {renderizarConteudo()}
        </li>
      )}
    </>
  );
};

export default MenuItems;
