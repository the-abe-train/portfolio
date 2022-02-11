import React, { FormEvent, useState } from "react";
import Button from "../components/Button";
import Layout from "../layouts/Layout";

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
      <div className="max-w-sm sm:w-96 mx-auto sm:col-span-2">
        <p className="mb-8">
          Use this form to send me any message about anything, from feature
          requests on my projects, to collaboration opportunities, to how you're
          feeling today. I love to hear from people and I read every message.
        </p>
        <form onSubmit={submitForm}>
          <label className="block mb-6">
            <span className="text-gray-900">Your name</span>
            <input
              type="text"
              name="name"
              className=" block w-full mt-1 p-1 border-gray-300 rounded-md shadow-lg"
              placeholder="The Joe Schmoe"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-900">Email address</span>
            <input
              name="email"
              type="email"
              className=" block w-full mt-1 p-1 border-gray-300 rounded-md shadow-lg"
              placeholder="joe.schmoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-900">Message</span>
            <textarea
              name="message"
              className="block w-full mt-1 p-1 border-gray-300 rounded-md shadow-lg"
              rows={3}
              placeholder="What's on your mind?"
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
