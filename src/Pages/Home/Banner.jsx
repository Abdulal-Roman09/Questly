import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-white lg:grid lg:h-[60vh] lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Bought the wrong product?
            <strong className="text-teal-600"> We've got your back.</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Welcome to <strong>Questly</strong> – the product recommendation hub
            where real reviews guide better choices. Learn from others'
            experiences, avoid common mistakes, and find what truly works for
            you.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link to={"/AllQueries"}>
              <p
                className="inline-block rounded bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                href="#"
              >
                See Better Alternatives
              </p>
            </Link>
            <Link to={"/AllQueries"}>
              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="#"
              >
                Read Real Reviews
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
