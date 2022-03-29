import React from "react";
import "./index.css";

export { Page };
export const documentProps = {
  // This title and description will override the defaults
  title: "About SpaceX",
  description: "Our mission is to explore the galaxy.",
};

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>A colored page.</p>
    </>
  );
}
