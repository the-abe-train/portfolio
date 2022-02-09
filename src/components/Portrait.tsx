import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { dynamicGradient } from "../lib/colours.module.css";

export default function Portrait() {
  return (
    <div className="w-60 block mx-auto border-2 rounded-md">
      <div className={dynamicGradient} style={{ padding: ".5rem" }}>
        <StaticImage src="../images/roo.jpg" alt="Abe and Roo" />
      </div>
    </div>
  );
}
