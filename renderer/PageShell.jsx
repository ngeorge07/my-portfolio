import React from "react";
import logo from "./logo.svg";
import "./scss/PageShell.scss";
import { PageContextProvider } from "./usePageContext";

import Header from "./Header";

export { PageShell };

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header />
        <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }) {
  return (
    <main
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
      id="page-content"
    >
      {children}
    </main>
  );
}
