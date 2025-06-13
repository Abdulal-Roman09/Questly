import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Fotter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-5">
      {/* Image Section */}
      <div className="relative h-48 lg:col-span-2 lg:h-auto">
        <img
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
          alt="Community Q&A"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-12 lg:col-span-3 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* About Q&A Platform */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
              About Questly
            </h2>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              Questly is a modern Q&A platform where curiosity meets clarity. Ask questions, share knowledge, and grow with a vibrant developer and learner community.
            </p>
          </div>

          {/* Contact & Community Links */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Community & Support
            </h2>
            <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <a href="#" className="hover:underline">Join the Community</a>
              <a href="#" className="hover:underline">Moderation Policy</a>
              <a href="#" className="hover:underline">Help & Support</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="sm:col-span-2">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Follow us
            </h2>
            <div className="mt-4 flex space-x-5">
              <a href="#" aria-label="Facebook" className="text-gray-700 dark:text-gray-300 hover:opacity-75">
                <FaFacebook></FaFacebook>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-700 dark:text-gray-300 hover:opacity-75">
                <FaInstagram></FaInstagram>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:opacity-75">
               <FaTwitter></FaTwitter>
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:opacity-75">
               <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
