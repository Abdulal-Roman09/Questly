import React from 'react'
import Slider from 'react-slick'
import ReactSlider from './ReactSlider'
import Banner from './Banner'
import LastPosts from './LastPost/LastPosts'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ReactSlider></ReactSlider>
      <LastPosts></LastPosts>
    </div>
  )
}

export default Home
