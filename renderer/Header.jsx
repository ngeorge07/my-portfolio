import React from "react";
import { Link } from "../components/Link";
import ThemeChanger from "../components/ThemeChanger";
import { BsGithub } from "react-icons/bs";

function Header() {
  return (
    <header>
      <nav>
        <Logo />
        <ul>
          <li>
            <Link className="navitem" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navitem" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <a
              className="navitem"
              target="_blank"
              href="https://github.com/ngeorge07/my-portfolio"
            >
              <BsGithub />
              Source
            </a>
          </li>
        </ul>
      </nav>

      <ThemeChanger />
    </header>
  );
}

function Logo() {
  return (
    <a id="logo" href="/">
      <h1>George Nicolae</h1>
    </a>
  );
}

export default Header;
