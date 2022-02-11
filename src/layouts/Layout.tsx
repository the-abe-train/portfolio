import React, { CSSProperties, useContext } from "react";
import svgBg from "../images/background.svg";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function Layout({ page, children }: Props) {
  const { theme, toggle, dark } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="absolute w-full top-0 bottom-0 flex flex-col">
      <Header page={page} />
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
          <Footer />
        </div>
      </main>
    </div>
  );
}
