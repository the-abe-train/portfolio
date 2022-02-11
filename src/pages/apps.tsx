import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../layouts/Layout";
import Project from "../components/Project";
import { ImageDataLike } from "gatsby-plugin-image";

type Node = {
  id: string;
  alt: string;
  description: string;
  title: string;
  image: ImageDataLike;
  url: string;
  repo: string;
};

type DataProps = {
  allProjectsJson: {
    nodes: Node[];
  };
};

export default function AppsPage({ data }: PageProps<DataProps>) {
  const { nodes } = data.allProjectsJson;
  return (
    <Layout page="Apps">
      {/* {nodes.map((project: Node) => {
        const { id, title, description, image, alt, url, repo } = project;
        return (
          <div></div>
          // <Project
          //   key={id}
          //   title={title}
          //   description={description}
          //   image={image}
          //   alt={alt}
          //   url={url}
          //   repo={repo}
          // />
        );
      })} */}
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
            gatsbyImageData
          }
        }
        alt
        description
        title
        url
        repo
      }
    }
  }
`;
