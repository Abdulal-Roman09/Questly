import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import FotterImg from "../assets/img/FotterImg.jpg";

const Fotter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-5">
      <div className="  grid grid-cols-1 lg:grid-cols-5 py-10 ">
        {/* Left Image */}
        <div className="relative h-48 lg:h-auto lg:col-span-2">
          <img
            src={FotterImg}
            className="absolute inset-0 h-full w-full object-cover rounded-2xl"
          />
        </div>

        {/* Footer Content */}
        <div className="px-6 py-12 lg:col-span-3 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* About the Site */}
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-teal-400">
                About Questly
              </h2>
              <p className="mt-4 text-sm">
                Questly is a community-powered product recommendation platform
                where users share what they love and trust. From gadgets to
                fashion, get inspired and explore what others recommend — for
                you.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-teal-400">
                Quick Links
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Explore Recommendations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Submit a Recommendation
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:underline">
                    FAQs & Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="sm:col-span-2">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-teal-400">
                Connect With Us
              </h2>
              <div className="mt-4 flex space-x-5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-blue-600"
                  title="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-500"
                  title="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-sky-400"
                  title="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-gray-500"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Questly — Made with{" "}
        <FaHeart className="inline text-red-500" /> by the Community
      </div>
    </footer>
  );
};

export default Fotter;
