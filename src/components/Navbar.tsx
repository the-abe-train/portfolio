import React from "react";

type Props = {
  items: any[];
};

export default function Navbar({ items }: Props) {
  return (
    <nav className="flex w-full justify-around px-4 py-2">
      {items.map((item, idx) => {
        return <span key={idx}>{item}</span>;
      })}
    </nav>
  );
}
