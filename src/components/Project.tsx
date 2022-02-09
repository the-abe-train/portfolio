import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: ImageDataLike;
  alt: string;
};

export default function Project({ title, description, image, alt }: Props) {
  const gatsbyImage = getImage(image);
  return (
    <div>
      <h3 className="text-2xl">{title}</h3>
      <div className="flex">
        <p className="w-2/3">{description}</p>
        <GatsbyImage image={gatsbyImage} alt={alt} />
      </div>
    </div>
  );
}
