'use client'

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter()

  return <header className="flex">

    <ul>
        <Link href={'/'}>
        <li>
            inicio
        </li>
        </Link>
        <button onClick={() => router.push('/rotas')}>Outra rota</button>
    </ul>
    
  </header>;
};

export default Header;
