import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Information from "../pages/Information";

// ESSE É O ARQUIVO DE ROTAS, ONDE A URL DO SITE VAI DIRECIONAR
// PARA CADA ARQUIVO ESPECIFICO DO SEU PROJETO
// NESSE EXEMPLO QUANDO NÃO EXISTER ROTA ELE VAI ESTAR NO ARQUIVO MAIN
// QUANDO EXISTER UM /NOMEDAROTA AI ELE NAVEGA PARA OUTRO ARQUIVO

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Main />} />
        <Route path="/information" element={<Information />} />
      </Switch>
    </BrowserRouter>
  );
}
