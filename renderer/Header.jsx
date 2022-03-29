import React from "react";
import { Link } from "./Link";
import ThemeChanger from "../components/ThemeChanger";

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/projects">
          Projects
        </Link>
        <Link className="navitem" href="/contact">
          Contact
        </Link>
      </nav>
      <ThemeChanger />
    </header>
  );
}

function Logo() {
  return (
    <a href="/">
      <h1>George Nicolae</h1>
    </a>
  );
}

export default Header;
