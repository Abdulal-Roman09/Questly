import React from 'react';

const Banner = () => {
  return (
    <section className="bg-white lg:grid lg:h-[60vh] lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Ask questions. 
            <strong className="text-teal-600"> Share knowledge. </strong>
            Grow together.
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Welcome to Questly – your trusted Q&A platform where curiosity meets clarity.
            Join a community of learners and experts. Ask questions, get answers, and build your knowledge.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
              href="#"
            >
              Ask a Question
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#"
            >
              Browse Topics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
