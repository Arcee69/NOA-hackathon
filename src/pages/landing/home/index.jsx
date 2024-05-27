import React from 'react'
import Banner from './components/Banner'
import Image from './components/Image'
import LearningMode from './components/LearningMode'
import Slide from './components/Slide'

const Homepage = () => {
  
  return (
    <div className='w-full'>
      <Banner />
      <Image />
      <LearningMode />
      {/* <Slide /> */}
    </div>
  )
}

export default Homepage