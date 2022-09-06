import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ESSE É O ARQUIVO PRINCIPAL ONDE O PROJETO VAI
// COMEÇAR APONTANDO PRO SEU ARQUIVO INICIAL CHAMADO APP

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
