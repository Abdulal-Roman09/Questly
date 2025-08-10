import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-white lg:grid lg:h-[50vh] lg:place-content-center dark:bg-gray-900 py-10 lg:mt-10">
      <motion.div
        className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-prose text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
          >
            Bought the wrong product?
            <strong className="text-teal-600"> We've got your back.</strong>
          </motion.h1>

          <motion.p
            className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            viewport={{ once: true }}
          >
            Welcome to <strong>Questly</strong> – the product recommendation hub
            where real reviews guide better choices. Learn from others'
            experiences, avoid common mistakes, and find what truly works for
            you.
          </motion.p>

          <motion.div
            className="mt-4 flex justify-center gap-4 sm:mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/AllQueries">
              <motion.p
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
              >
                See Better Alternatives
              </motion.p>
            </Link>
            <Link to="/AllQueries">
              <motion.p
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Read Real Reviews
              </motion.p>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
