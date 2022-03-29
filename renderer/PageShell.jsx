import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./scss/PageShell.scss";
import { PageContextProvider } from "./usePageContext";

import Header from "./Header";
import LoadingScreen from "../components/LoadingScreen";

export { PageShell };

function PageShell({ pageContext, children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <React.StrictMode>
          <PageContextProvider pageContext={pageContext}>
            <Header />
            <Content>{children}</Content>
          </PageContextProvider>
        </React.StrictMode>
      ) : (
        <LoadingScreen />
      )}
    </>
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
