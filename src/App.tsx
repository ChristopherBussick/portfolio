import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import Nav from "./components/navigation/Nav";
import Navbar from "./components/navigation/Navbar";
import { NavItems } from "./navItems";
import { ProjectsList } from "./projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <StyledApp>
          <GlobalStyle />
          <Navbar>
            <Nav navItems={NavItems} />
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Projects"
              exact
              render={(props) => {
                return <Projects projects={ProjectsList} />;
              }}
            />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
