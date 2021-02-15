import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.3s;
  }

  body {
    font-family: 'Quicksand', sans-serif;
  }

  a {
    text-decoration: none;
    transition: 0.2s;
  }

  h1 {
    font-size: 4.1rem;
    font-weight: 700;

    /* Adds a linear gradient to the text */
    background: ${(props) =>
      "linear-gradient(90deg, " +
      props.theme.colors.main +
      " 0%, " +
      props.theme.colors.secondary +
      " 100%)"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray};
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export default GlobalStyle;
