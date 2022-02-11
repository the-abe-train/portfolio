import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
// import GitHub from "../images/github.svg";
// import Link from "../images/link.svg";

type Props = {
  title: string;
  description: string;
  image: ImageDataLike;
  alt: string;
  url: string;
  repo: string;
};

// TODO TEST In Project, need more space between text and icon on mobile
// TODO add dark theme (with context?)
// TODO test on Lighthouse
// TODO test on Safari

const style = {
  fontFamily: "Copse",
};

export default function Project({
  title,
  description,
  image,
  alt,
  url,
  repo,
}: Props) {
  const projectImage = getImage(image);
  return (
    <div className="flex justify-center space-x-2">
      <div className="w-60 sm:w-56 mb-4 flex flex-col space-y-3">
        <h3 className="text-2xl" style={style}>
          {title}
        </h3>
        <p>{description}</p>
        <div className="flex space-x-4">
          {/* <GitHub />
          <Link /> */}
          {/* <a href={repo}>
            <img width={20} src={github} alt="GitHub" />
          </a>
          <a href={url}>
            <img width={20} src={link} alt="Link" />
          </a>
          <Svg /> */}
        </div>
      </div>
      <a href={url}>
        <div className="h-full w-28 relative drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          {projectImage && (
            <GatsbyImage
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              image={projectImage}
              alt={alt}
            />
          )}
        </div>
      </a>
    </div>
  );
}
