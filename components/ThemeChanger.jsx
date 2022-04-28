import{ useState, useEffect } from "react";

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
      <svg
        id="change-theme"
        version="1.1"
        viewBox="0 0 700 580"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m350 14c-70.547 0-138.21 28.023-188.09 77.91-49.887 49.883-77.91 117.54-77.91 188.09s28.023 138.21 77.91 188.09c49.883 49.887 117.54 77.91 188.09 77.91s138.21-28.023 188.09-77.91c49.887-49.883 77.91-117.54 77.91-188.09s-28.023-138.21-77.91-188.09c-49.883-49.887-117.54-77.91-188.09-77.91zm0 507.14c-63.953 0-125.29-25.406-170.51-70.629-45.223-45.219-70.629-106.55-70.629-170.51s25.406-125.29 70.629-170.51c45.219-45.223 106.55-70.629 170.51-70.629s125.29 25.406 170.51 70.629c45.223 45.219 70.629 106.55 70.629 170.51-0.074219 63.93-25.504 125.22-70.711 170.43-45.203 45.207-106.5 70.637-170.43 70.711zm-196.39-243.6c0 52.742 20.949 103.32 58.242 140.61 37.293 37.293 87.871 58.242 140.61 58.242v-397.99c-34.938 0-69.262 9.207-99.508 26.691-30.25 17.48-55.359 42.625-72.801 72.898-17.441 30.273-26.598 64.609-26.547 99.547z"></path>
      </svg>
    </button>
  );
}

export default ThemeChanger;
