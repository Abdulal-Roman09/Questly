import React from "react";
import { FaQuestionCircle, FaEnvelope, FaComments } from "react-icons/fa";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";

const HelpSupport = () => {
  return (
    <>
      <Navber />
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Help & <span className="text-blue-600">Support</span>
          </h1>
          <p className="text-center text-gray-600 mb-12">
            We’re here to help! Browse FAQs, contact us, or start a live chat
            with our support team.
          </p>

          {/* Help Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FaQuestionCircle className="text-blue-500 text-4xl mb-4" />
              <h2 className="text-xl font-semibold mb-2">FAQs</h2>
              <p className="text-gray-600 mb-4">
                Find answers to commonly asked questions about our products and
                services.
              </p>
              <a
                href="/faq"
                className="text-blue-500 font-semibold hover:underline"
              >
                View FAQs →
              </a>
            </div>

            {/* Contact via Email */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FaEnvelope className="text-green-500 text-4xl mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email Support</h2>
              <p className="text-gray-600 mb-4">
                Can’t find an answer? Send us an email and our support team will
                get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@example.com"
                className="text-green-500 font-semibold hover:underline"
              >
                support@example.com
              </a>
            </div>

            {/* Live Chat */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FaComments className="text-purple-500 text-4xl mb-4" />
              <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
              <p className="text-gray-600 mb-4">
                Need quick help? Chat with one of our representatives in
                real-time.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default HelpSupport;
