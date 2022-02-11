import { Link } from "gatsby";
import React from "react";
import { dynamicGradient } from "../styles/colours.module.css";

type Props = {
  page: string;
};

export default function Header({ page }: Props) {
  const pageName = (name: string) => (page === name ? <b>{name}</b> : name);
  return (
    <header className={`${dynamicGradient} py-2 px-4 dark:text-white`}>
      <nav className="flex w-full sm:max-w-sm sm:mx-auto justify-around text-lg">
        <Link to="/">{pageName("Me")}</Link>
        <Link to="/apps">{pageName("Apps")}</Link>
        <Link to="/sites">{pageName("Sites")}</Link>
        <Link to="/blog">{pageName("Blog")}</Link>
      </nav>
    </header>
  );
}
