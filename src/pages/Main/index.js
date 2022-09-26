import React from "react";
import { usePeople } from "../../contexts/people";
import { GiPirateFlag, GiPirateGrave } from "react-icons/gi";
import ButtonAdd from "../components/ButtonAdd";
import {
  Container,
  Title,
  Body,
  SubTitleArea,
  SubTitle,
  Header,
  List,
  Person,
} from "./styles";

// ESSA É A NOSSA PAGINA PRICIPAL, ONDE CONTEM OS COMPONENTES CRIADOS DO ZERO
// UTILZIANDO O STYLED COMPONENTS E A NOSSA ESTRUTURA DE COMPONENTS QUE FORMAM
// A PAGINA EM REACT, PODE PERCEBER QUE VOCE PODE TANTO UTILZIAR O HTML SEM CRIAR
// DO ZERO QUANTO TAMBEM PODE STYLIZAR POR AQUI TAMBÉM



export default function Main() {
  // AQUI ESTOU UTLIZANDO O NOSSO CONTEXT PADA PODER
  // BUSCAR OS VALORES  QUE ESTÃO ARMEZADOS NAQUELE ARQUIVO CONTEXTS/PEOPLE/INDEX.JS
  const { arrayPeople, setModalVisible } = usePeople();
  return (
    <Container>
      <Title>
        Piratas
        <GiPirateFlag />
      </Title>
      <Body>
        <SubTitleArea>
          <SubTitle>Lista de pessoas</SubTitle>

          {/* AQUI EU ESTO CRIANDO UMA ARROW FUNCTION, QUE NADA MAIS É 
          QUE UMA FUNÇÃO QUE PODEMOS RODAR DENTRO DO HTML MESMO,
           SEM PRECISAR CRIAR ELA FORA, NESSE CASO ESTOU RODANDO UMA FUNÇÃO
           QUE ESTÁ DENTRO DO NOSSO CONTEXT PARA MUDAR O ESTADO DO
           NOSSO MODAL */}

          <ButtonAdd onClick={() => setModalVisible(true)}>
            <label> Adicionar novo</label>
            <GiPirateGrave style={{ marginLeft: "10px" }} />
          </ButtonAdd>
        </SubTitleArea>
        <Header>
          {/* AQUI EU DEIXEI UM EXEMPLO DE USO DE HTML DENTRO DO CODIGO REACT
          E ESTILIZAÇÃO NELE MESMO */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            NOME
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            IDADE
          </div>
        </Header>
        <List>
          {/* AQUI EU UTILIZO UMA LÓGICA PARA VALIDAR O TAMANHO NO ARRAY,
           SE ELE FOR MAIOR QUE ZERO AI EU PEÇO PRA ELE RELIZAR O LOOP
           QUE NESSA CASO É UM MAP  */}

          {/* ESSEE LOOP CHAMADO MAP, RODA ITEM POR ITEM DO NOSSO ARRAY
           É COMO SE ELE PARASSE NO TEMPO PARA PODER FAZER ALGUM COISA
           COM AQUELA INFORMAÇÃO QUE ESTÁ PASSANDO NAQUELE MOMENTO,
           NESSE CASO ELE PASSA o person QUE VALE COMO CADA OBJETO DE
           DETRNO DO NOSSO ARRAY, QUE CONTEM O NOME E A IDADE, E ASSIM EU
           CONSTRUO O NOSSO COMPONENTES USANDO OS DADOS QUE ESTÁ NO CONTEXT*/}
          {arrayPeople?.length > 0 &&
            arrayPeople.map((person) => (
              <Person key={person.name}>
                <span>{person.name}</span>
                <span>{person.age}</span>
              </Person>
            ))}
        </List>
      </Body>
    </Container>
  );
}
