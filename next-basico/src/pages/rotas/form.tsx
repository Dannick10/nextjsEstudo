import React, { useState } from "react";

const form = () => {
  const [nome, SetNome] = useState<string>("");
  const [idade, SetIdade] = useState<number>(0);
  const [usuario, Setusuario] = useState();

  const saveUser = async () => {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        nome,
        idade,
      }),
    });
    const res = await fetch("/api/form");
    const usuario = await res.json();
    Setusuario(usuario);
  };

  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => SetNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => SetIdade(+e.target.value)}
      />
      <button onClick={saveUser}>Enviar</button>
      <div>
        {usuario?.map((e) => (
          <li>
            {e.nome} | {e.idade}
          </li>
        ))}
      </div>
    </div>
  );
};

export default form;
