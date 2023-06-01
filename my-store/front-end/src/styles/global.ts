import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.white};

    .ReactModal__Overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(18, 18, 20, 0.9) !important;
    }
  }

  body, input, textearea, button {
    font-family: Roboto;
    font-weight: 400;
  }
`;
