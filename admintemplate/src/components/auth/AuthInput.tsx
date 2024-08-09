import React from "react";

type AuthInputProps = {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  tipo: "text" | "email" | "password";
  valorMudou: (novoValor: any) => void;
};

const AuthInput = (props: AuthInputProps) => {
  return props.naoRenderizarQuando ? null : (
    <div>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.tipo}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
      />
    </div>
  );
};

export default AuthInput;
