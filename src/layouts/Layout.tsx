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
  backgroundSize: "100% 100%",
};

// const headerStyle: CSSProperties = {
//   padding: "0.5rem 1rem"
// }

export default function Layout({ page, children }: Props) {
  const pageName = (name: string) => (page === name ? <b>{name}</b> : name);
  return (
    <div className="absolute w-full top-0 bottom-0 flex flex-col">
      <header
        className={`${dynamicGradient} py-2 px-4`}
        // style={{ boxShadow: "30px 30px black" }}
      >
        <nav className="flex w-full sm:max-w-sm sm:mx-auto justify-around text-lg">
          <Link to="/">{pageName("Me")}</Link>
          <Link to="/apps">{pageName("Apps")}</Link>
          <Link to="/sites">{pageName("Sites")}</Link>
          <Link to="/blog">{pageName("Blog")}</Link>
        </nav>
      </header>

      <main style={bgStyle} className="flex-grow relative">
        <div
          className="flex flex-col space-y-6 px-4 h-full
        sm:h-min  sm:grid sm:grid-cols-2 sm:auto-rows-min sm:max-w-3xl sm:mx-auto sm:gap-x-4
        2xl:relative 2xl:absoulte 2xl:top-1/2 2xl:-translate-y-2/3"
        >
          <h1
            className="text-5xl text-center mt-8 mb-4 sm:col-span-2 sm:self-end"
            style={style}
          >
            The Abe Train
          </h1>
          {children}
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
        </div>
      </main>
      {/* <footer className="absolute bottom-0 w-full clear-both -mt-4 order-last py-2"> */}
      {/* <Background /> */}
    </div>
  );
}
