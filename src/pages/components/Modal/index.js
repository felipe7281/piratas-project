import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { usePeople } from "../../../contexts/people";
import {
  Container,
  Title,
  ButtonClose,
  Form,
  ButtonArea,
  Button,
} from "./styles";

import 'react-toastify/dist/ReactToastify.css';
import { GiWhiteBook } from "react-icons/gi";


// ESSE É UM COMPONENTE QUE ESTÁ SENDO USADO PARA CADASTRAR
// A PESSOA, COM ESSA ESTILIZAÇÃO ELE CONSEGUE FICAR POR CIMA DE TUDO
// A ESTILIZAÇÃO ESTÁ TODA NO ARQUIVO STYLES.JS

export default function Modal() {
  // ESSE NEGÓCIO CHAMADO USESTATE  É UMA DAS PRINCIPAIS FUNCIONALIDADES
  // DO REACT.JS ELE QUE ARMAZENA NOSSAS VARIÁVEIS LOCALMENTE E
  // ASSIM PODEMOS ARMAZENAR E GUARDAR VALORES ENQUANTO A PAGINA
  // NÃO FOR ATUALIZADA
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { modalVisible, setModalVisible, arrayPeople, setArrayPeople } =
    usePeople();
  
   

  // AQUI EU CRIEI UMA FUNÇÃO PARA VALIDAR SE A PESSOA CONFIRMA QUE DESEJA FECHAR
  // E SE ELA CONFIRMAR AI EU FECHO O MODAL
  const handleCloseModal = () => {
    if (window.confirm("Você realmente quer sair?")) {
      setModalVisible(false);
    }
  };

  // AQUI É UMA FUNÇÃO PADRÃO DO HTML, ONDE VOCE PEGA CONSTROI
  // UM FORMULARIO COM UM BOTÃO DE TIPO SUBMIT QUE VAI
  // RODAR ESSA FUNÇÃO
  const handleSubmit = (e) => {
    // ISSO É NECESSARIO SEMPRE QUE FOR UTILIZARO O FORMULARIO
    // PORQUE O SUBMIT DO BOTÃO ATUALIZA A TELA E RENDERIZA TUDO NOVAMENTO
    // COM ISSO ELE DEIXAR DE ATUALIZAR E MANTEM OS ESTADOS
    e.preventDefault();
    if (!name || !age) {
      return toast.error('Nome e Idade são obrigatórios', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        });
    };
    
   
    // AQUI EU UTLIZO O SPREAD OPERATOR PARA CRIAR UM NOVO ARRAY
    // SE BASEANDO NO NOSSO ARRAY DE PESSOAS, O SPREAD ALEM DE CRIAR UM ARRAY
    // ELE PEGA TODAS AS PROPRIEDADES DELE ASSIM COMO O PUSH
    const newArray = [...arrayPeople];

    // O PUSH BASICAMENTE INSERE ALGUMA COISA NOVA DENTRO DE UMA CASA
    // DENTRO DO ARRAY, ASSIM EU VOU INCLUINDO UM NOVO OBJETO COM O
    // NOME E IDADE DA PESSOA
    newArray.push({ name, age });

    // VOCE PODE UTILIZAR O CONSOLE LOG PARA VER OS DADOS QUE ESTÁ SENDO
    // RENDERIZADO, ASSIM ACOMPNHAR SE OS DADOS ESTÃO CORRETOS E TUDO MAIS,
    // O CONSOLE LOG PODE SER RODADE EM QUALQUER LUGAR DO CÓDIGO
    // PARA VISUALIZAR O LOG BASTA IR NO NAVEGADOR QUE ESTÁ RODANDO
    // APERTAR O BOTÃO DIREITO E DEPOIS INPECIONAR ELEMENTOS
    // DEPOIS MUDAR PARA ABA CONSOLE
    console.log(arrayPeople, "< = arrayPeople");

    console.log(newArray, "< = newArray");

    // AQUI EU ATUALIZO A NOSSA STATE QUE ESTÁ NO CONTEXT
    // EU NOSSO BASICAMENTE INCLUIR O NOVO ITEM NO ARRAY QUE JA ESTÁ LA
    // PORQUE O REACT TRABALHA COM STATE SEM ALTERAÇÕES,
    // ENTÃO PRECISAMOS CRIAR UM NOVO ARRAY E SUBESCREVER UM NOVO EM CIMA
    setArrayPeople(newArray);
    setModalVisible(false);
    toast.success('Cadastro realizado com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    
    
     
   };
  
return (
    modalVisible && (
      <Container>
        <Title>
          <label>Cadastro de nova pessoa</label>
          <ButtonClose onClick={handleCloseModal} type="button">
            <AiOutlineCloseCircle size={30} />
          </ButtonClose>
        </Title>
        <Form onSubmit={handleSubmit}>
          <label className="labelName">Nome</label>
          <input
            onChange={(element) => setName(element.target.value)}
            type="text"
            placeholder="Digite o nome"
          />
          <label className="labelAge">Idade</label>
          <input
            onChange={(element) => setAge(element.target.value)}
            type="number"
            placeholder="Digite a idade"
          />

          <ButtonArea>
            <Button type="submit">Cadastrar</Button>
          </ButtonArea>
        </Form>
      </Container>
    ) 
  );
}
