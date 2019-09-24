import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

const AppLayout = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <AppLayout>
        <GlobalStyle />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
        </Router>
      </AppLayout>
    </>
  );
}

export default App;
