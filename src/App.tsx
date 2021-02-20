import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";
import Home from "./components/Home";
import Nav from "./components/navigation/Nav";
import Navbar from "./components/navigation/Navbar";
import { NavItems } from "./navItems";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledApp>
        <GlobalStyle />
        <Navbar>
          <Nav navItems={NavItems} />
        </Navbar>
        <Home />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
