import React from "react";
import Logo from "./Logo";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <Logo />
      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="mailto:georgenico9@gmail.com" target="_blank">
              <MdEmail />
              georgenico9@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/georgenicolae07/"
              target="_blank"
            >
              <BsLinkedin />
              @georgenicolae07
            </a>
          </li>
          <li>
            <a href="https://github.com/ngeorge07" target="_blank">
              <BsGithub />
              @ngeorge07
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
