import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layouts/Layout";

export default function BlogPage() {
  return (
    <Layout page="Blog">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta name="description" content="The Abe Train's portfolio website" />
        <title>The Abe Train | Blog</title>
        <link rel="canonical" href="http://the-abe-train.com/blog" />
      </Helmet>
      <p className="col-span-2 w-full text-center">Coming soon!</p>
    </Layout>
  );
}
