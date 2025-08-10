import React from "react";
import Slider from "react-slick";
import ReactSlider from "./ReactSlider";
import Banner from "./Banner";
import LastPosts from "./LastPost/LastPosts";
import Faq from "./Faq";
import Tastmial from "./Tastmial";
import Priceing from "./Priceing";
import MeetOurTeam from "./MeetOurTeam";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ReactSlider></ReactSlider>
      <LastPosts></LastPosts>
      <Faq></Faq>
      <Features/>
      <Tastmial></Tastmial>
      <Priceing />
      <MeetOurTeam/>

    </div>
  );
};

export default Home;
