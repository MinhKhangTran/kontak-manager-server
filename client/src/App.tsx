import React from "react";
import { Route, Switch } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Routes
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
