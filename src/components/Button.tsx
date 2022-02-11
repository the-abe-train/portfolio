import React from "react";
import { dynamicGradient } from "../styles/colours.module.css";

export default function Button({ children }: any) {
  return (
    <button
      className={`${dynamicGradient} rounded-lg py-2 px-4`}
      style={{ minWidth: "6rem" }}
    >
      <div>{children}</div>
    </button>
  );
}
