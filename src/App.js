import { PeopleProvider } from "./contexts/people";
import Modal from "./pages/components/Modal";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

// ESSE É O SEU ARQUIVO INICIAL, ONDE TEMOS
// UM PROVIDER ONDE ESTA ARMEZANDO OS VALORES DAS VARIÁVEIS
// O ARQUIVO DE ROTAS QUE CONTEM AS SUAS PAGINAS
// UMA ESTILIZAÇÃO GLOBAL PARA TODAS AS COISAS
// O MODAL QUE VAI APARECER POR CIMA DE TUDO

function App() {
  return (
    <PeopleProvider>
      <Routes />
      <GlobalStyle />
      <Modal />
    </PeopleProvider>
  );
}

export default App;
