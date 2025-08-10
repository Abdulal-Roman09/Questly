import React from "react";
import { FaQuestionCircle, FaEnvelope, FaComments } from "react-icons/fa";
import Navber from "../../Componenets/Navber";
import Fotter from "../../Componenets/Fotter";
import { Link } from "react-router";

const HelpSupport = () => {
  return (
    <>
      <Navber />
      <div className="bg-gray-50 dark:bg-gray-900 mt-10 py-12 px-6 text-teal-700">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-teal-700 mb-4 dark:text-teal-400">
            Help & <span className="text-teal-600 dark:text-teal-400">Support</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-teal-600 dark:text-teal-300">
            We’re here to help! Browse FAQs, contact us, or start a live chat
            with our support team.
          </p>

          {/* Help Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-teal-600 hover:shadow-lg transition">
              <div className="flex justify-center">
                <FaQuestionCircle className="text-teal-600 text-5xl mb-4" />
              </div>
              <h2 className="text-xl font-semibold text-center text-teal-700 mb-2 dark:text-teal-400">
                FAQs
              </h2>
              <p className="text-teal-600 text-center mb-4 dark:text-teal-300">
                Find answers to common questions about our services.
              </p>
              <div className="text-center">
                <Link to={`/`}>
                  <p className="text-teal-600 font-medium hover:underline cursor-pointer">
                    View FAQs →
                  </p>
                </Link>
              </div>
            </div>

            {/* Contact via Email */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-teal-600 hover:shadow-lg transition">
              <div className="flex justify-center">
                <FaEnvelope className="text-teal-600 text-5xl mb-4" />
              </div>
              <h2 className="text-xl font-semibold text-center text-teal-700 mb-2 dark:text-teal-400">
                Email Support
              </h2>
              <p className="text-teal-600 text-center mb-4 dark:text-teal-300">
                Can’t find an answer? Email us and our support team will respond
                within 24 hours.
              </p>
              <div className="text-center">
                <a
                  href="mailto:support@example.com"
                  className="text-teal-600 font-medium hover:underline cursor-pointer"
                >
                  support@example.com
                </a>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-teal-600 hover:shadow-lg transition">
              <div className="flex justify-center">
                <FaComments className="text-teal-600 text-5xl mb-4" />
              </div>
              <h2 className="text-xl font-semibold text-center text-teal-700 mb-2 dark:text-teal-400">
                Live Chat
              </h2>
              <p className="text-teal-600 text-center mb-4 dark:text-teal-300">
                Need quick help? Chat with one of our representatives in
                real-time.
              </p>
              <div className="flex justify-center">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-medium transition cursor-pointer">
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
