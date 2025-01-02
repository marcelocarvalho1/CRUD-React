import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #000000;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />

    <App />
  </StrictMode>
);
