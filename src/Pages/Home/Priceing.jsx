import React from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingPlans = () => {
 const plans = [
  {
    name: "Basic",
    description: "Perfect for individual users",
    price: "$10",
    priceSuffix: "/ month",
    features: [
      "Access to 50 product recommendations",
      "10 GB user data storage",
      "Basic analytics dashboard",
      "Email support",
      "Personalized product alerts",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for growing teams",
    price: "$20",
    priceSuffix: "/ month",
    features: [
      "Access to 200 product recommendations",
      "50 GB user data storage",
      "Advanced analytics & insights",
      "Priority email & chat support",
      "Multi-user collaboration",
    ],
  },
  {
    name: "Enterprise",
    description: "For large businesses and teams",
    price: "$100",
    priceSuffix: "/ month",
    features: [
      "Unlimited product recommendations",
      "1 TB user data storage",
      "Custom analytics & reports",
      "Dedicated account manager",
      "24/7 premium support",
    ],
  },
];


  return (
    <section className="p-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-center bg-gray-900 text-emerald-400 text-3xl md:4xl lg:5xl font-semibold">
            Choose the Right Plan for You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Flexible plans designed for individuals, teams, and growing businesses.
          </p>
        </div>

        <div className=" mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(({ name, description, price, priceSuffix, features }) => (
            <div
              key={name}
              className="flex flex-col rounded-lg p-8 shadow-sm border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{description}</p>

              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                {price}{" "}
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">{priceSuffix}</span>
              </div>

              <h4 className="mt-8 mb-3 font-semibold text-gray-900 dark:text-gray-100">Includes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Everything you get in this plan</p>

              <ul className="flex-1 space-y-4 text-gray-600 dark:text-gray-300 font-medium text-sm">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 bg-teal-700 text-gray-100 rounded-md py-3 text-sm font-medium hover:bg-teal-800 transition">
                Buy Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
