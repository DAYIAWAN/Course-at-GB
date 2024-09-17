import "./components/Themes.css";
import React from "react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div>
        <ThemeSwitcher />
        <h1 className={`${theme}`}>SOME RANDOM TEXT</h1>
    </div>
  );
}

export default App;
