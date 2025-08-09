import React from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";

const ContactUs = () => {
  return (
    <>
      <Navber />

      <div className="bg-gray-900 py-10 text-white">
        {/* Contact Header */}
        <section className="bg-teal-700 text-white py-16 text-center mt-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            Have questions or feedback about our recommendations? Let’s talk!
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              Get in touch
            </h2>
            <p className="text-gray-400 mb-4 max-w-md">
              Our team is ready to help you find the best products and alternatives. Contact us for queries, support, or feedback.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>📍 Address:</strong> 123 Product Street, Dhaka, Bangladesh
              </li>
              <li>
                <strong>📧 Email:</strong> support@productrecommend.com
              </li>
              <li>
                <strong>📞 Phone:</strong> +880 123 456 789
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Fotter />
    </>
  );
};

export default ContactUs;
