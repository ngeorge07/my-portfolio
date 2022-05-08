import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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
    <button onClick={() => setThemeState(!themeState)}>

      {themeState ? (
        <FaSun
          style={{ width: "1.5rem", height: "1.5rem", color: "#f3f3f3" }}
        />
      ) : (
        <FaMoon
          style={{ width: "1.5rem", height: "1.5rem", color: "#202023" }}
        />
      )}
    </button>
  );
}

export default ThemeChanger;
