import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppcontextProps {
    tema: Tema
    alternarTema?: () => void
}

const Appcontext = createContext<AppcontextProps>({
    tema: '',
    alternarTema: null
});

export function AppProvider(props) {

    const [tema, SetTema] = useState<Tema>('')

    function alternarTema() {
        SetTema(tema === '' ? 'dark' : '')
    }

  return (
    <Appcontext.Provider
      value={{
        tema,
        alternarTema
      }}
    >
      {props.children}
    </Appcontext.Provider>
  );
}

export default Appcontext;