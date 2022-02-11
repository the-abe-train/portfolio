import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import Icon from "./Icon";

type Props = {
  title: string;
  description: string;
  image: ImageDataLike;
  alt: string;
  url: string;
  repo: string;
};

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
        <h2 className="text-2xl" style={style}>
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex space-x-4">
          <a href={repo} aria-label="GitHub">
            <Icon name="github" width={24} />
          </a>
          <a href={url} aria-label="alt">
            <Icon name="link2" width={24} />
          </a>
        </div>
      </div>
      <a href={url}>
        <div
          className="h-full w-28 relative 
        drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]
        dark:drop-shadow-[0_0_5px_rgba(200,200,200,0.3)]"
        >
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
