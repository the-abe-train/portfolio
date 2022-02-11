import React from "react";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import reddit from "../images/reddit.svg";

export default function Footer() {
  return (
    <footer
      className="w-full h-16 clear-both order-last flex-grow relative
  sm:max-w-sm sm:mx-auto sm:col-span-2"
    >
      <nav
        className="flex w-full justify-around text-lg absolute bottom-0 py-4
    sm:max-w-sm sm:mx-auto "
      >
        <a href="https://twitter.com/theAbeTrain">
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
        </a>
      </nav>
    </footer>
  );
}
