import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Fotter from "../../Componenets/Fotter";
import Navber from "../../Componenets/Navber";

const SocialMediaLinks = () => {
  return (
    <>
      <Navber />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-white text-center py-16 px-6 mt-15">
        <h1 className="text-4xl font-bold mb-4">
          Stay Connected with{" "}
          <span className="text-yellow-400">Our Community</span>
        </h1>
        <p className="text-lg text-teal-100 max-w-2xl mx-auto">
          Discover the best products, get expert reviews, and connect with a
          community that values quality.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="bg-white dark:bg-gray-900 py-10">
        <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Follow Us
        </h2>
        <div className="flex justify-center gap-8 text-4xl">
          {[
            { icon: <FaFacebook />, color: "text-blue-600 dark:text-blue-400", link: "#" },
            { icon: <FaTwitter />, color: "text-sky-500 dark:text-sky-400", link: "#" },
            { icon: <FaInstagram />, color: "text-pink-600 dark:text-pink-400", link: "#" },
            { icon: <FaLinkedin />, color: "text-blue-700 dark:text-blue-500", link: "#" },
            { icon: <FaYoutube />, color: "text-red-600 dark:text-red-400", link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} hover:scale-125 transition-transform`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div
        className="py-16 px-6 text-gray-900 dark:text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.8)",
        }}
      >
       <div className="relative max-w-lg mx-auto">
  <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
    Join Our Exclusive Newsletter
  </h2>
  <p className="text-gray-700 dark:text-teal-300 mb-6 text-base leading-relaxed">
    Be the first to know about the best product updates, offers, and
    recommendations from our experts.
  </p>
  <form className="flex flex-col sm:flex-row justify-center gap-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-4 py-2 rounded-lg text-gray-900 dark:text-gray-900 flex-1 bg-white dark:bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
    <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-semibold transition text-gray-900">
      Subscribe
    </button>
  </form>
</div>

      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 dark:bg-gray-950 py-8 text-gray-700 dark:text-gray-300 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <FaEnvelope /> support@example.com
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> +880 1234-567890
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Dhaka, Bangladesh
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          © 2025 Product Recommendation Site. All Rights Reserved.
        </p>
      </div>

      <Fotter />
    </>
  );
};

export default SocialMediaLinks;
