import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { dynamicGradient, darkGradient } from "../styles/colours.module.css";

export default function Button({ children }: any) {
  const { darkMode } = useContext(ThemeContext).theme;
  return (
    <button
      className={`${
        darkMode ? darkGradient : dynamicGradient
      } rounded-lg py-2 px-4`}
      style={{ minWidth: "6rem" }}
    >
      <div>{children}</div>
    </button>
  );
}
