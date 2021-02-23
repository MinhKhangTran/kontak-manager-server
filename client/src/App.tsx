import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactEdit from "./components/ContactEdit";

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
          <Route path="/edit/:id">
            <ContactEdit />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
