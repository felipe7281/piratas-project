import { createContext, useContext, useState } from "react";

export const PeopleContext = createContext({});

// ESSE É O NOSSO CONTEXT, AQUI PODEMOS CRIAR VARIÁVEIS
// QUE PODE SER ACESSADA DE QUALQUER ARQUIVO DO NOSSO PROJETO
// COM ISSO CONSEGUIMOS CONTROLAR SE O MODAL ESTÁ ABERTO
// OU ATÉ MESMO A NOSSA LISTA DE PESSOAS

export const PeopleProvider = ({ children }) => {
  // ESSE NEGÓCIO CHAMADO USESTATE  É UMA DAS PRINCIPAIS FUNCIONALIDADES
  // DO REACT.JS ELE QUE ARMAZENA NOSSAS VARIÁVEIS LOCALMENTE E
  // ASSIM PODEMOS ARMAZENAR E GUARDAR VALORES ENQUANTO A PAGINA
  // NÃO FOR ATUALIZADA
  const [modalVisible, setModalVisible] = useState(false); //innitial Modal Status
  const [arrayPeople, setArrayPeople] = useState([
    {
      name: "Tsunami",
      age: 25,
    },
  ]);

  return (
    <PeopleContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        arrayPeople,
        setArrayPeople,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeople = () => useContext(PeopleContext);
