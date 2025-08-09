import React from "react";
import { FaQuestionCircle, FaEnvelope, FaComments } from "react-icons/fa";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { Link } from "react-router";

const HelpSupport = () => {
  return (
    <>
      <Navber />
      <div className="bg-gray-900 mt-10 py-12 px-6 text-gray-300">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Help & <span className="text-indigo-400">Support</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12">
            We’re here to help! Browse FAQs, contact us, or start a live chat
            with our support team.
          </p>

          {/* Help Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FAQ Section */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition">
              <div className="flex justify-center">
                <FaQuestionCircle className="text-indigo-400 text-5xl mb-4" />
              </div>
              <h2 className="text-xl font-semibold text-center text-white mb-2">
                FAQs
              </h2>
              <p className="text-gray-400 text-center mb-4">
                Find answers to common questions about our services.
              </p>
              <div className="text-center">
                <Link to={`/`}>
                  <p
                    className="text-indigo-400 font-medium hover:underline"
                  >
                    View FAQs →
                  </p>
                </Link>
              </div>
            </div>

            {/* Contact via Email */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition">
              <div className="flex justify-center">
                <FaEnvelope className="text-green-400 text-5xl mb-4" />
              </div>
              <h2 className="text-xl font-semibold text-center text-white mb-2">
                Email Support
              </h2>
              <p className="text-gray-400 text-center mb-4">
                Can’t find an answer? Email us and our support team will respond
                within 24 hours.
              </p>
              <div className="text-center">
                <a
                  href="mailto:support@example.com"
                  className="text-green-400 font-medium hover:underline"
                >
                  support@example.com
                </a>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition">
              <div className="flex justify-center">
                <FaComments className="text-purple-400 text-5xl mb-4" />
              </div>
              <h2 className="text-xl font-semibold text-center text-white mb-2">
                Live Chat
              </h2>
              <p className="text-gray-400 text-center mb-4">
                Need quick help? Chat with one of our representatives in
                real-time.
              </p>
              <div className="flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium transition">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default HelpSupport;
