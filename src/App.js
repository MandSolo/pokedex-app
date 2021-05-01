import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.sh",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <p>pokemon graphql stuff</p>
      </main>
    </ApolloProvider>
  );
}

export default App;
