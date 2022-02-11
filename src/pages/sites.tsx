import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layouts/Layout";

export default function SitesPage() {
  return (
    <Layout page="Sites">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta name="description" content="The Abe Train's portfolio website" />
        <title>The Abe Train | Sites</title>
        <link rel="canonical" href="http://the-abe-train.com/sites" />
      </Helmet>
      <p className="col-span-2 w-full text-center">Coming soon!</p>
    </Layout>
  );
}
