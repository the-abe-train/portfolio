import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  lightBackground,
  darkBackground,
} from "../styles/background.module.css";

type Props = {
  page: string;
  children: any;
};

export default function Layout({ page, children }: Props) {
  const { theme } = useContext(ThemeContext);
  const dark = theme.darkMode ? "dark" : "";
  return (
    <div className={`absolute w-full top-0 bottom-0 flex flex-col ${dark}`}>
      <Header page={page} />
      <main
        className={`flex-grow relative text-gray-900 dark:text-gray-200
      ${theme.darkMode ? darkBackground : lightBackground}`}
      >
        <div className="flex flex-col space-y-6 px-4 h-full max-w-3xl mx-auto ">
          <h1 className="text-5xl text-center mt-8 mb-4 font-header">
            The Abe Train
          </h1>
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}
