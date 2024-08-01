import { createContext } from "react";

const Appcontext = createContext({
    nome: null
});

export function AppProvider(props) {
  return (
    <Appcontext.Provider
      value={{
        nome: "Teste Context API",
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
}

export default Appcontext;