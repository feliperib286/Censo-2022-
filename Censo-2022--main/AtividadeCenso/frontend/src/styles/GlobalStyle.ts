
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
  }

  a {
    color: #80cbc4;
    text-decoration: none;
  }

  button {
    background-color: #1e1e1e;
    color: #e0e0e0;
    border: 1px solid #333;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }

  select, input {
    background-color: #1e1e1e;
    color: #e0e0e0;
    border: 1px solid #444;
    padding: 6px;
    border-radius: 4px;
  }

  ::placeholder {
    color: #aaa;
  }
`;

export default GlobalStyle;
