import React from 'react'
import Slider from 'react-slick'
import ReactSlider from './ReactSlider'
import Banner from './Banner'
import LastPosts from './LastPost/LastPosts'
import Faq from './Faq'
import Tastmial from './Tastmial'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ReactSlider></ReactSlider>
      <LastPosts></LastPosts>
      <Faq></Faq>
      <Tastmial></Tastmial>
    </div>
  )
}

export default Home
