import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../layouts/Layout";
import Project from "../components/Project";
import { ImageDataLike } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

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
  // console.log(allProjectsJson);
  const { nodes } = data.allProjectsJson;
  return (
    <Layout page="Apps">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta name="description" content="The Abe Train's portfolio website" />
        <title>The Abe Train | Apps</title>
        <link rel="canonical" href="http://the-abe-train.com/apps" />
      </Helmet>
      {nodes.map((project: Node) => {
        const { id, title, description, image, alt, url, repo } = project;
        return (
          <Project
            key={id}
            title={title}
            description={description}
            image={image}
            alt={alt}
            url={url}
            repo={repo}
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
