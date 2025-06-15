import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReactSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
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
    "https://i.ibb.co/LDP8qMbD/1.jpg",
    "https://i.ibb.co/wrhTmQ8y/2.jpg",
    "https://i.ibb.co/rSZ8pvZ/3.jpg",
    "https://i.ibb.co/21HV6f7R/4.jpg",
  ];

  return (
    <div className="slider-container md:px-20 py-10 md:py-20 bg-white dark:bg-gray-900">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReactSlider;
