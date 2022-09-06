import styled from "styled-components";

// ESSE É O ARQUIVO QUE EU CRIO O COMPONENTE DO ZERO
// UTLIZANDO UMA BIBLIOTECA CHAMADA STYLED COMPONENTS
// AQUI JA CRIAMOS OS COMPONENTES BASEADO NOS ELEMENTOS HML
// E ESTILIZAMOS ELE DO JEITO QUE QUISER

export const Button = styled.button`
  border: 0;
  background: green;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: 0.4s all;

  &:hover {
    box-shadow: 0px 2px 4px #fff;
    background: darkgreen;
  }
`;
