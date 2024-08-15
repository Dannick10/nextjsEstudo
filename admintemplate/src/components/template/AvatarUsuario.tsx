import React from "react";
import Link from "next/link";
import useAuth from "@/data/hook/useAppAuth";
import { IconeUsuario } from "../icons";
import Image from "next/image";

type Props = {};

const AvatarUsuario = (props: Props) => {
  const { usuario } = useAuth();

  console.log(usuario);
  return (
    <Link href={"/perfil"}>
      {usuario?.imageUrl ? (
        <Image
          src={usuario.imageUrl}
          alt="avatar"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
      ) : (
        <span className="h-10 w-10 flex items-center justify-center rounded-full">
          {IconeUsuario}
        </span>
      )}
    </Link>
  );
};

export default AvatarUsuario;
