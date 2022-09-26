import { PeopleProvider } from "./contexts/people";
import Modal from "./pages/components/Modal";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </PeopleProvider>
    
  );
}

export default App;
