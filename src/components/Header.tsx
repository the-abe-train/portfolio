import { Link } from "gatsby";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { dynamicGradient, darkGradient } from "../styles/colours.module.css";

type Props = {
  page: string;
};

export default function Header({ page }: Props) {
  const { darkMode } = useContext(ThemeContext).theme;
  const pageName = (name: string) => (page === name ? <b>{name}</b> : name);
  return (
    <header
      className={`${
        darkMode ? darkGradient : dynamicGradient
      } py-2 px-4 text-gray-900 dark:text-gray-200`}
    >
      <nav className="flex w-full sm:max-w-sm sm:mx-auto justify-around text-lg">
        <Link to="/">{pageName("Me")}</Link>
        <Link to="/apps">{pageName("Apps")}</Link>
        <Link to="/media">{pageName("Media")}</Link>
        <Link to="/blog">{pageName("Blog")}</Link>
      </nav>
    </header>
  );
}
