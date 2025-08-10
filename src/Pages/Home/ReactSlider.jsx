import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReactSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const slides = [
    {
      src: "https://i.ibb.co.com/YBb0C4NN/denny-muller-Yi-LArpym-Ko-A-unsplash.jpg",
      title: "Robot vacuum cleaner for pet hair",
     
    },
    {
      src: "https://i.ibb.co.com/B5mJz5jT/c-d-x-PDX-a-82obo-unsplash.jpg",
      title: "Best noise cancelling headphones",
     
    },
    {
      src: "https://i.ibb.co.com/1YDHBMGX/domino-studio-164-6w-VEHf-I-unsplash.jpg",
      title: "Comfortable running shoes for daily jogs",
    
    },
    {
      src: "https://i.ibb.co.com/6cMtnWDq/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash.jpg",
      title: "Looking for a lightweight alternative to MacBook Pro M2",
     
    },
  ];

  return (
    <div className="slider-container bg-white dark:bg-gray-900  flex items-center justify-center pb-10 ">
     
      <div className="container mx-auto px-4 ">
        <Slider {...settings}>
          {slides.map(({ src, title  }, index) => (
            <div key={index} className="px-2 relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[60vh]  object-cover rounded-xl shadow-xl brightness-75"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2  bg-opacity-100 text-white rounded-md p-2  text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl ">{title}</h3>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReactSlider;
