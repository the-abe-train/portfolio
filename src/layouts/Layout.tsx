import { Link } from "gatsby";
import React, { CSSProperties } from "react";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import reddit from "../images/reddit.svg";
// import Background from "./Background";
import svgBg from "../images/background.svg";
import { dynamicGradient } from "../lib/colours.module.css";

type Props = {
  page: string;
  children: any;
};

const style = {
  fontFamily: "Copse",
};

const bgStyle: CSSProperties = {
  background: `url(${svgBg}) no-repeat`,
  backgroundSize: "cover",
};

export default function Layout({ page, children }: Props) {
  const pageName = (name: string) => (page === name ? <b>{name}</b> : name);
  return (
    <div
      className="absolute w-full top-0 bottom-0 flex flex-col justify-between"
      style={bgStyle}
    >
      <header className={dynamicGradient}>
        <nav className="flex w-full justify-around text-lg">
          <Link to="/">{pageName("Me")}</Link>
          <Link to="/apps">{pageName("Apps")}</Link>
          <Link to="/sites">{pageName("Sites")}</Link>
          <Link to="/blog">{pageName("Blog")}</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col space-y-6 px-4">
        <h1 className="text-5xl text-center mt-8 mb-4" style={style}>
          The Abe Train
        </h1>
        {children}
      </main>
      <footer className="relative w-full clear-both -mt-4">
        <nav className="flex w-full justify-around px-4 py-2">
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
      {/* <Background /> */}
    </div>
  );
}
