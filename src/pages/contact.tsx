import React, { FormEvent, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import Layout from "../layouts/GridLayout";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState(false);

  async function submitForm(e: FormEvent) {
    try {
      e.preventDefault();
      const body = JSON.stringify({ email, name, message });
      const response = await fetch("https://the-abe-train.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body,
      });
      if (response.status === 200) {
        setReceived(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Layout page="Contact">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta name="description" content="The Abe Train's portfolio website" />
        <title>The Abe Train | Contact</title>
        <link rel="canonical" href="http://the-abe-train.com/contact" />
      </Helmet>
      <div className="max-w-sm sm:w-96 mx-auto sm:col-span-2">
        <p className="mb-8">
          Use this form to send me a message. It can be about anything, from
          feature requests on my projects, to collaboration opportunities, to
          how you're feeling today. I love to hear from people and I read every
          message!
        </p>
        <form onSubmit={submitForm}>
          <label className="block mb-6">
            <span>Your name</span>
            <input
              type="text"
              name="name"
              className=" block w-full mt-1 p-1 border-gray-300 rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]"
              placeholder="The Joe Schmoe"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span>Email address</span>
            <input
              name="email"
              type="email"
              className=" block w-full mt-1 p-1 border-gray-300 rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]"
              placeholder="joe.schmoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span>Your message</span>
            <textarea
              name="message"
              className="block w-full mt-1 p-1 border-gray-300 rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]"
              rows={3}
              placeholder="Please be polite with your message :)"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              required
            ></textarea>
          </label>
          <div className="block text-center">
            <Button>Send</Button>
          </div>
        </form>
        {received && <p className="text-center my-8">Message sent!</p>}
      </div>
    </Layout>
  );
}
