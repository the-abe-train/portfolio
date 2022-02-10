import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import github from "../images/github.svg";
import link from "../images/link.svg";

type Props = {
  title: string;
  description: string;
  image: ImageDataLike;
  alt: string;
  url: string;
  repo: string;
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
    <div className="flex justify-center">
      <div className="w-60 sm:w-56 mb-4 flex flex-col space-y-3">
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
        <div className="flex space-x-4">
          <a href={repo}>
            <img width={20} src={github} alt="GitHub" />
          </a>
          <a href={url}>
            <img width={20} src={link} alt="Link" />
          </a>
        </div>
      </div>
      <a href={link}>
        <div className="h-full w-28 relative drop-shadow-lg ">
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
