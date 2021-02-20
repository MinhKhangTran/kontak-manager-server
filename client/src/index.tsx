import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
