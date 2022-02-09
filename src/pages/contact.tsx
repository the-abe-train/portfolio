import React, { FormEvent } from "react";
import Button from "../components/Button";
import Layout from "../layouts/Layout";

export default function ContactPage() {
  function submitForm(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <Layout page="Contact">
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 ">
          <form onSubmit={submitForm}>
            <label className="block mb-6">
              <span className="text-gray-900">Your name</span>
              <input
                type="text"
                name="name"
                className=" block w-full mt-1 p-1 border-gray-300 rounded-md shadow-sm "
                placeholder="The Joe Schmoe"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-900">Email address</span>
              <input
                name="email"
                type="email"
                className=" block w-full mt-1 p-1 border-gray-300 rounded-md shadow-sm"
                placeholder="joe.schmoe@example.com"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-900">Message</span>
              <textarea
                name="message"
                className="block w-full mt-1 p-1 border-gray-300 rounded-md shadow-sm"
                rows={3}
                placeholder="What's on your mind?"
              ></textarea>
            </label>
            <div className="block text-center">
              <Button>Send</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
