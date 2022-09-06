import styled from "styled-components";

// ESSE É O ARQUIVO QUE EU CRIO O COMPONENTE DO ZERO
// UTLIZANDO UMA BIBLIOTECA CHAMADA STYLED COMPONENTS
// AQUI JA CRIAMOS OS COMPONENTES BASEADO NOS ELEMENTOS HML
// E ESTILIZAMOS ELE DO JEITO QUE QUISER

export const Container = styled.div`
  font-family: "Cinzel Decorative", cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonClose = styled.button`
  border: 0;
  background: transparent;
`;

export const Form = styled.form`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  .labelAge {
    margin-top: 20px;
  }

  input {
    margin-top: 2px;
    padding: 10px;
    font-size: 16px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  background: green;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
`;
