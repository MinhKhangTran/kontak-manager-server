import React from "react";
import { Route, Switch, Redirect, RouteProps } from "react-router-dom";
import ContactEdit from "./components/ContactEdit";

// Layout
import Layout from "./components/Layout";

// Routes
import Home from "./pages/Home";

// redux
import { useSelector } from "react-redux";
import { RootStore } from "./store";

const PrivateRoute = (props: RouteProps) => {
  const { children, ...rest } = props;
  const users = useSelector((state: RootStore) => state.users);
  return (
    <Route
      {...rest}
      render={() => {
        return users.user._id.length !== 0 ? (
          children
        ) : (
          <Redirect to="/"></Redirect>
        );
      }}
    ></Route>
  );
};

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/edit/:id">
            <ContactEdit />
          </PrivateRoute>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
