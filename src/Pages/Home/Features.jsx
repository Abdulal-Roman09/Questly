import React from "react";
import {
  FaCogs,
  FaLock,
  FaHeadset,
  FaTachometerAlt,
  FaGlobeAmericas,
  FaComments,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-emerald-600 dark:text-emerald-400 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Discover Our Exclusive Features
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
            Unlock powerful tools and smart solutions crafted to help you find
            the best products, read authentic reviews, and make confident choices
            every time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {[
            {
              icon: <FaCogs />,
              title: "Customization",
              desc: "Tailor your product recommendations and alerts based on your preferences and interests.",
            },
            {
              icon: <FaLock />,
              title: "Security",
              desc: "We protect your data with industry-leading security measures so your privacy is always safeguarded.",
            },
            {
              icon: <FaHeadset />,
              title: "Support",
              desc: "Get expert help anytime with 24/7 support dedicated to your satisfaction.",
            },
            {
              icon: <FaTachometerAlt />,
              title: "Performance",
              desc: "Enjoy fast, smooth browsing and quick load times to find the best products without delays.",
            },
            {
              icon: <FaGlobeAmericas />,
              title: "Global Reach",
              desc: "Access product reviews and recommendations from users worldwide.",
            },
            {
              icon: <FaComments />,
              title: "Communication",
              desc: "Connect with reviewers and other users to share honest feedback and advice.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-xl group p-8 text-center bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white transition duration-300 shadow-none hover:shadow-xl"
            >
              <div className="mx-auto mb-6 w-12 h-12 text-emerald-500 dark:group-hover:text-teal-400 transition-colors">
                {React.cloneElement(feature.icon, { className: "w-full h-full" })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-teal-400 text-sm leading-relaxed transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
