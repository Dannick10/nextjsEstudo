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
    <div className="flex flex-col mt-4">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.tipo}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className="px-4 py-3 rounded-lg bg-blue-200 mt-2 focus:bg-white focus:border-blue-500 border outline-none"
      />
    </div>
  );
};

export default AuthInput;
