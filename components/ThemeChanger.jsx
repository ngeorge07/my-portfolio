import React, { useState, useEffect } from "react";

function ThemeChanger() {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("Theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [themeState]);

  return (
    <div>
      <button onClick={() => setThemeState(!themeState)}>
        {themeState ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeChanger;
