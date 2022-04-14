import React from "react";

function TextSection({ children, title }) {
  return (
    <div>
      <h3>{title}</h3>

      <p>{children}</p>
    </div>
  );
}

export default TextSection;
