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

const PlanCard = ({ name, description, price, priceSuffix, features, highlight }) => (
  <div
    className={`flex flex-col rounded-lg p-8 border transition-all duration-300 
      bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-300 
      hover:shadow-xl hover:-translate-y-1 
      ${highlight ? "ring-2 ring-teal-500" : ""}`}
  >
    {highlight && (
      <span className="mb-4 self-start px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full">
        Most Popular
      </span>
    )}
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

    <button
      className="mt-8 bg-teal-700 text-gray-100 rounded-md py-3 text-sm font-medium hover:bg-teal-800 transition"
    >
      Buy Plan
    </button>
  </div>
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
      highlight: true,
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
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-emerald-500 dark:text-emerald-400 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Choose the Right Plan for You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Flexible plans designed for individuals, teams, and growing businesses.
          </p>
        </div>

        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
