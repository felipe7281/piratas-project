import styled from "styled-components";

// ESSE É O ARQUIVO QUE EU CRIO O COMPONENTE DO ZERO
// UTLIZANDO UMA BIBLIOTECA CHAMADA STYLED COMPONENTS
// AQUI JA CRIAMOS OS COMPONENTES BASEADO NOS ELEMENTOS HML
// E ESTILIZAMOS ELE DO JEITO QUE QUISER

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
`;

export const Title = styled.div`
  font-family: "Cinzel Decorative", cursive;
  font-size: 50px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const SubTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.label`
  font-weight: bold;
  font-size: 24px;
  font-family: "Cinzel Decorative", cursive;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #000;
  margin-top: 20px;
  padding-top: 20px;
`;

export const List = styled.div`
  border-top: 1px solid #000;
  margin-top: 20px;
`;

export const Person = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-family: "Cinzel Decorative", cursive;
  padding: 20px 0;

  & + div {
    border-top: 1px solid #bbb;
  }

  span + span {
    border-left: 1px solid #000;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;
