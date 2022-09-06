import { createGlobalStyle } from "styled-components";

// AQUI ESTÁ TODA A ESTILIZAÇÃO PADRÃO DO SITE
// POR PADRÃO O HTML JA TEM ALGUNS ESTILOS
// NESSE ARQUIVO EU RETIREI OS ESTILOS PADRÃO

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor:pointer;
  }

  .no-scroll {
    overflow: hidden !important;
  }
`;
