import React from "react";

function TextSection({ children, title }) {
  return (
    <section>
      <>
        <h3>{title}</h3>
        {children}
      </>
    </section>
  );
}

export default TextSection;
