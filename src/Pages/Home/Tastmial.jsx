import React from "react";

const Tastmial = () => {
  return (
    <div className="p-4 mx-auto bg-gray-900 px-2 md:px-10 lg:px-20 py-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-900 dark:text-teal-400 leading-tight">
          What our happy client say
        </h2>
        <p className="text-[15px] mt-6 leading-relaxed text-teal-700 dark:text-teal-300">
          See what our happy clients have to say. They’ve shared how our templates helped them launch quickly, look professional, and grow with ease.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-md:justify-center text-center max-lg:max-w-3xl max-md:max-w-lg mx-auto mt-16">
        {/* Testimonial 1 */}
        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              alt="John Doe"
              className="w-24 h-24 rounded-full border-2 border-teal-600"
            />
            <div className="mt-6">
              <h4 className="text-base font-semibold text-teal-900 dark:text-teal-300">
                John Doe
              </h4>
            </div>
          </div>

          <div className="flex justify-center space-x-1 mt-3">
            {[...Array(3)].map((_, i) => (
              <svg
                key={`star1-${i}`}
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
            {[...Array(2)].map((_, i) => (
              <svg
                key={`star1-empty-${i}`}
                className="w-4 h-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-[15px] leading-relaxed text-teal-700 dark:text-teal-300 font-normal">
              ReadymadeUI made it so easy to launch my website. The components are clean, fast to use, and saved me hours of development time.
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-3.webp"
              alt="Mark Adair"
              className="w-24 h-24 rounded-full border-2 border-teal-600"
            />
            <div className="mt-6">
              <h4 className="text-base font-semibold text-teal-900 dark:text-teal-300">
                Mark Adair
              </h4>
            </div>
          </div>

          <div className="flex justify-center space-x-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={`star2-${i}`}
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-[15px] leading-relaxed text-teal-700 dark:text-teal-300 font-normal">
              I love how professional everything looks with ReadymadeUI. The templates are modern, responsive, and easy to customize.
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div>
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-4.webp"
              alt="Simon Konecki"
              className="w-24 h-24 rounded-full border-2 border-teal-600"
            />
            <div className="mt-6">
              <h4 className="text-base font-semibold text-teal-900 dark:text-teal-300">
                Simon Konecki
              </h4>
            </div>
          </div>

          <div className="flex justify-center space-x-1 mt-3">
            {[...Array(4)].map((_, i) => (
              <svg
                key={`star3-${i}`}
                className="w-4 h-4 fill-teal-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>

          <div className="mt-6">
            <p className="text-[15px] leading-relaxed text-teal-700 dark:text-teal-300 font-normal">
              ReadymadeUI gave my project a polished look without the hassle. The layouts are beautifully designed and ready to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tastmial;
