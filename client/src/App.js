import React from "react";
import Router from "./modules/Components/Routes/Router";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import store from "./modules/redux/store";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
