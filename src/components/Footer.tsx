import React, { useContext } from "react";
import { ReactComponent as Twitter } from "../images/twitter.svg";

import { ReactComponent as GitHub } from "../images/github.svg";
import { ReactComponent as LinkedIn } from "../images/linkedin.svg";
import { ReactComponent as Reddit } from "../images/reddit.svg";
import { ThemeContext } from "../context/ThemeContext";
export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (setTheme) {
      setTheme({ darkMode: !theme.darkMode });
    }
  }

  return (
    <footer
      className="w-full h-16 clear-both order-last flex-grow relative
  sm:max-w-sm sm:mx-auto sm:col-span-2"
    >
      <nav
        className="flex w-full justify-around text-lg absolute bottom-0 py-4
    sm:max-w-sm sm:mx-auto "
      >
        <Twitter fill="pink" />
        <GitHub fill="pink" />
        <LinkedIn fill="pink" />
        <Reddit fill="pink" />
        {/* <a href="https://twitter.com/theAbeTrain">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://github.com/the-abe-train">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/abe-train-81418714b/">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.reddit.com/user/AsteroidSvelte">
          <img src={reddit} alt="Reddit" />
        </a> */}
        <button onClick={toggleTheme}>Theme</button>
      </nav>
    </footer>
  );
}
