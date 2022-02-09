import React from "react";
import { dynamicGradient } from "../lib/colours.module.css";

export default function Button({ children }) {
  return (
    <button className={dynamicGradient} style={{ borderRadius: ".5rem" }}>
      <div>{children}</div>
    </button>
  );
}
