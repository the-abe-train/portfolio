import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Portrait() {
  return (
    <div className="w-60 block mx-auto border-2">
      <StaticImage src="../images/portrait.png" alt="portrait" />
    </div>
  );
}
