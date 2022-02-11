import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { dynamicGradient, darkGradient } from "../styles/colours.module.css";
import { ThemeContext } from "../context/ThemeContext";

function ChoosePic({ darkMode }: { darkMode: boolean }) {
  if (darkMode) {
    return <StaticImage src="../images/dark_roo.png" alt="Abe and Roo" />;
  } else {
    return <StaticImage src="../images/roo.jpg" alt="Abe and Roo" />;
  }
}

export default function Portrait() {
  const { darkMode } = useContext(ThemeContext).theme;

  return (
    <div className="w-60 block mx-auto rounded-md">
      <div
        className={darkMode ? darkGradient : dynamicGradient}
        style={{ padding: ".5rem" }}
      >
        <ChoosePic darkMode={darkMode} />
      </div>
    </div>
  );
}
