import { Link } from "gatsby";
import React from "react";
import Navbar from "./Navbar";

const style = {
  fontFamily: "Copse",
};

export default function Layout({ children }) {
  const headerItems = ["Me", "Apps", "Sites", "Blog"];
  const footerItems = ["Twitter", "LinkedIn", "GitHub", "Reddit"];
  return (
    <div className="absolute w-full top-0 bottom-0 flex flex-col justify-between">
      <header className="shadow">
        {/* <Navbar items={headerItems} /> */}
        <nav className="flex w-full justify-around px-4 py-2">
          <Link to="/">Me</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/sites">Sites</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col space-y-6 p-4">
        <h1 className="text-5xl text-center my-4" style={style}>
          The Abe Train
        </h1>
        {children}
      </main>
      <footer className="relative w-full clear-both -mt-4">
        <Navbar items={footerItems} />
      </footer>
    </div>
  );
}
