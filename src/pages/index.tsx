import * as React from "react";
import Layout from "../components/Layout";
import "@fontsource/copse";
import Portrait from "../components/Portrait";
import Button from "../components/Button";

const IndexPage = () => {
  return (
    <Layout>
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
        <Button>Contact</Button>
        <Button>Subscribe</Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
