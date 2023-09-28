import React from 'react'
// Components

import HeroImageSlider from '../Components/HeroImageSlider'
import OurTours from '../Components/OurTours'
import AboutUs from '../Components/AboutUs'
import OurTeam from '../Components/OurTeam'
import Newsletter from '../Components/Newsletter'








const Home = () => {
  return (
    <div className=''>

     <HeroImageSlider/>
     <OurTours/>
     <AboutUs/>
     <OurTeam/>
     <Newsletter/>
 
    </div>
  )
}

export default Home