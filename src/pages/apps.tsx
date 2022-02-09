import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import { ImageDataLike } from "gatsby-plugin-image";

type DataProps = {
  allProjectsJson: {
    nodes: {
      id: string;
      alt: string;
      description: string;
      title: string;
      image: ImageDataLike;
    }[];
  };
};

export default function AppsPage({ data }: PageProps<DataProps>) {
  // console.log(allProjectsJson);
  const { nodes } = data.allProjectsJson;
  return (
    <Layout>
      {nodes.map((project) => {
        const { id, title, description, image, alt } = project;
        return (
          <Project
            key={id}
            title={title}
            description={description}
            image={image}
            alt={alt}
          />
        );
      })}
    </Layout>
  );
}

export const productsQuery = graphql`
  query JsonQuery {
    allProjectsJson {
      nodes {
        id
        image {
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
        alt
        description
        title
      }
    }
  }
`;
