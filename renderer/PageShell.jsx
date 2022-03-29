import React from "react";
import logo from "./logo.svg";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";

export { PageShell };

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Logo />
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/projects">
          Projects
        </Link>
        <Link className="navitem" href="/contact">
          Contact
        </Link>
        <Content>{children}</Content>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <a href="/">
      <h1>George Nicolae</h1>
    </a>
  );
}
