'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import path from "path";

export default function Home() {

  const router = useRouter()

  const navigation = (url:string) => {
    router.push(url)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
          <Link href={'/rotas/params?id=12&nome=daniel'}>
        <li>
            Rotas
        </li>
          </Link>
      </ul>
      <div className="flex flex-col">
        <button onClick={() => router.push('/rotas/buscar')}>Buscar</button>
        <button onClick={() => navigation('daniel/123')}>Daniel</button>
      </div>
    </main>
  );
}
