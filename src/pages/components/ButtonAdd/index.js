import React from "react";
import { Button } from "./styles";

// ESSE É UM COMPONENTE PADRÃO QUE VOCE PODE REUTILIZAR
// ELE DE VARIAS FORMAS, ESTOU PASSANDO ALGUMAS INFORMAÇÃO POR
// PROPS, ONDE O COMPONENTE RECEBE E ATRIBUI DO JEITO QUE QUISER,
// ESSA PROPS CHAMADA children É TUDO O QUE POSSUIR DENTRO DO DAS <> DO
// COMPONENTE, E ESSA PROPS onClick  É UM FUNÇÃO PADRÃO QUE EU DEVO
// PASSAR PARA PODER REALIZAR ALGUMA AÇÃO NO CLICK DESSE BOTÃO

// ESSE BOTÃO ESTÁ SENDO UTILIZADO NA PAGINA PRINCIPAL MAIN, TENTE UTILIZA-LO

export default function ButtonAdd({ children, onClick }) {
  return (
    <Button onClick={onClick} type="button">
      {children}
    </Button>
  );
}
