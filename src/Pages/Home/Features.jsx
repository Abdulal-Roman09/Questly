import React from "react";
import { FaCogs, FaLock, FaHeadset, FaTachometerAlt, FaGlobeAmericas, FaComments } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-center bg-gray-900 text-emerald-400 text-3xl md:4xl lg:5xl font-semibold">
            Discover Our Exclusive Features
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Unlock powerful tools and smart solutions crafted to help you find the best products, read authentic reviews, and make confident choices every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 dark:hover:bg-gray-800 dark:hover:text-teal-400 text-white transition duration-300 shadow-none hover:shadow-xl">
            <FaCogs className="mx-auto mb-6 w-12 h-12 text-emerald-400 group-hover:text-purple-800 dark:group-hover:text-teal-400 transition-colors" />
            <h3 className="text-xl font-semibold mb-3">Customization</h3>
            <p className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
              Tailor your product recommendations and alerts based on your preferences and interests.
            </p>
          </div>

          <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 dark:hover:bg-gray-800 dark:hover:text-teal-400 text-white transition duration-300 shadow-none hover:shadow-xl">
            <FaLock className="mx-auto mb-6 w-12 h-12 text-emerald-400 group-hover:text-purple-800 dark:group-hover:text-teal-400 transition-colors" />
            <h3 className="text-xl font-semibold mb-3">Security</h3>
            <p className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
              We protect your data with industry-leading security measures so your privacy is always safeguarded.
            </p>
          </div>

          <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 dark:hover:bg-gray-800 dark:hover:text-teal-400 text-white transition duration-300 shadow-none hover:shadow-xl">
            <FaHeadset className="mx-auto mb-6 w-12 h-12 text-emerald-400 group-hover:text-purple-800 dark:group-hover:text-teal-400 transition-colors" />
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <p className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
              Get expert help anytime with 24/7 support dedicated to your satisfaction.
            </p>
          </div>

          <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 dark:hover:bg-gray-800 dark:hover:text-teal-400 text-white transition duration-300 shadow-none hover:shadow-xl">
            <FaTachometerAlt className="mx-auto mb-6 w-12 h-12 text-emerald-400 group-hover:text-purple-800 dark:group-hover:text-teal-400 transition-colors" />
            <h3 className="text-xl font-semibold mb-3">Performance</h3>
            <p className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
              Enjoy fast, smooth browsing and quick load times to find the best products without delays.
            </p>
          </div>

          <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 dark:hover:bg-gray-800 dark:hover:text-teal-400 text-white transition duration-300 shadow-none hover:shadow-xl">
            <FaGlobeAmericas className="mx-auto mb-6 w-12 h-12 text-emerald-400 group-hover:text-purple-800 dark:group-hover:text-teal-400 transition-colors" />
            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
            <p className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
              Access product reviews and recommendations from users worldwide.
            </p>
          </div>

          <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 dark:hover:bg-gray-800 dark:hover:text-teal-400 text-white transition duration-300 shadow-none hover:shadow-xl">
            <FaComments className="mx-auto mb-6 w-12 h-12 text-emerald-400 group-hover:text-purple-800 dark:group-hover:text-teal-400 transition-colors" />
            <h3 className="text-xl font-semibold mb-3">Communication</h3>
            <p className="text-slate-300 group-hover:text-slate-600 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
              Connect with reviewers and other users to share honest feedback and advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
