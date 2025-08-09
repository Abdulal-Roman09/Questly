import React from "react";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";

const ContactUs = () => {
  return (
    <>
      <Navber />

      {/* Contact Header */}
      <section className="bg-teal-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">
          Have questions or feedback about our recommendations? Let’s talk!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            Send us a message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            Get in touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our team is ready to help you find the best products and
            alternatives. Contact us for queries, support, or feedback.
          </p>
          <ul className="space-y-3">
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

      <Fotter />
    </>
  );
};

export default ContactUs;
