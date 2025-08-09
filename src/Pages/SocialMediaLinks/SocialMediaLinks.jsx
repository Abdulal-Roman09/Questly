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
      <div className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Stay Connected with{" "}
          <span className="text-yellow-400">Our Community</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Discover the best products, get expert reviews, and connect with a
          community that values quality.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="bg-gray-900 py-10">
        <h2 className="text-center text-2xl font-semibold text-white mb-8">
          Follow Us
        </h2>
        <div className="flex justify-center gap-8 text-4xl">
          {[
            { icon: <FaFacebook />, color: "text-blue-500", link: "#" },
            { icon: <FaTwitter />, color: "text-sky-400", link: "#" },
            { icon: <FaInstagram />, color: "text-pink-500", link: "#" },
            { icon: <FaLinkedin />, color: "text-blue-400", link: "#" },
            { icon: <FaYoutube />, color: "text-red-500", link: "#" },
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
        className="py-16 px-6 text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Join Our Exclusive Newsletter
        </h2>
        <p className="text-gray-200 mb-6 max-w-lg mx-auto">
          Be the first to know about the best product updates, offers, and
          recommendations from our experts.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-black flex-1"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-semibold transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-950 py-8 text-gray-300 text-center">
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
        <p className="text-gray-500 text-sm">
          © 2025 Product Recommendation Site. All Rights Reserved.
        </p>
      </div>

      <Fotter />
    </>
  );
};

export default SocialMediaLinks;
