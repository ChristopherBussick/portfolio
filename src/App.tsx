import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { defaultTheme } from "./styles/themes/default-theme";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import { NavItemType, NavItemProps } from "./components/NavItem";

const NavItems: Array<NavItemProps> = [
  { itemType: NavItemType.Anchor, label: "Home" },
  { itemType: NavItemType.Anchor, label: "Projects" },
  { itemType: NavItemType.Anchor, label: "Skillset" },
  { itemType: NavItemType.Anchor, label: "Hobbies" },
  { itemType: NavItemType.Anchor, label: "Contact" },
];

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
