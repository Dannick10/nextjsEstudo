import React from "react";
import Link from "next/link";

type MenuItemProps = {
  url: string;
  texto: string;
  icone: any;
};

const MenuItems = (props: MenuItemProps) => {
  return (
    <li className={`hover:bg-green-100`}>
      <Link href={props.url}>
        <p className="flex flex-col justify-center items-center h-20 w-full">
          {props.icone}
          <span className={`text-xs font-light text-gray-600`}>
            {props.texto}
          </span>
        </p>
      </Link>
    </li>
  );
};

export default MenuItems;
