import React from "react";
import { dynamicGradient } from "../lib/colours.module.css";

export default function Button({ children }: any) {
  return (
    <button
      className={dynamicGradient}
      style={{ borderRadius: ".5rem", minWidth: "6rem" }}
    >
      <div>{children}</div>
    </button>
  );
}
