import * as React from "react";
import Layout from "../layouts/Layout";
import "@fontsource/copse";
import Portrait from "../components/Portrait";
import Button from "../components/Button";
import { graphql, Link } from "gatsby";

export default function IndexPage() {
  return (
    <Layout page="Me">
      <p className="text-gray-900">Hey there! Thanks for visiting my site.</p>
      <Portrait />
      <p>
        I'm a{" "}
        <a
          className="underline"
          href="https://www.credly.com/badges/bc1d5730-f739-44ad-8024-b717f036cb56/public_url"
        >
          cloud-certified
        </a>{" "}
        <b>Full-stack Web Developer</b>. I design and develop web sites and apps
        from the ground up to reach people all over the world. I'm always open
        to new challenges, so let's connect!
      </p>
      <div className="flex space-x-5 justify-center">
        <Link to="/contact">
          <Button>
            <b>Contact</b> <br />{" "}
            <span className="text-sm">to hire or collab</span>
          </Button>
        </Link>
        <Link to="https://cdn.forms-content.sg-form.com/4f1973a2-5167-11ec-8c8b-2e7ccf1b28b5">
          <Button>
            <b>Subscribe</b> <br />{" "}
            <span className="text-sm">to to get updates</span>
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

export const productsQuery = graphql`
  query Metadata {
    site {
      siteMetadata {
        title
      }
    }
    file {
      name
    }
  }
`;