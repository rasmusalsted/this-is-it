import React from 'react'
// Components

import HeroImageSlider from '../Components/HeroImageSlider'
import OurTours from '../Components/OurTours'
import AboutUs from '../Components/AboutUs'
import OurTeam from '../Components/OurTeam'







const Home = () => {
  return (
    <div className=''>

     {/* <HomeHero />  */}
     <HeroImageSlider/>
     <OurTours/>
     <AboutUs/>
     <OurTeam/>




    </div>
  )
}

export default Home