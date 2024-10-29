import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/graphql/apolloClient";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://0a1b453a491f06be4f15234f0b00c77a@o4508208475865088.ingest.us.sentry.io/4508208478748672",
  integrations: [],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
