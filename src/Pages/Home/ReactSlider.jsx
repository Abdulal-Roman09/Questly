import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReactSlider() {
  const settings = {
    dots: true,
    arrows: false, // 👈 Hide left and right arrows
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    "Ask technical questions and get expert answers.",
    "Join a community of learners and developers.",
    "Share your knowledge to help others grow.",
    "Upvote helpful answers, build your reputation.",
    "Track your questions and mark accepted solutions.",
    "Your curiosity builds a smarter tomorrow.",
  ];

  return (
    <div className="slider-container md:px-20 py-10 md:py-20 bg-white dark:bg-gray-900 ">
      <Slider {...settings}>
        {slides.map((text, index) => (
          <div key={index} className="px-2">
            <div className="h-120 flex items-center justify-center bg-teal-600 dark:bg-teal-700 text-white text-center px-6 py-10 rounded-xl shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold leading-relaxed">{text}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReactSlider;
