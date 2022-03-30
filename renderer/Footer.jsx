import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer>
      <Logo />
      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>E-mail: georgenico9@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
