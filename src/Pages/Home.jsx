import React from 'react'
// Components

import HeroImageSlider from '../Components/HeroImageSlider'
import OurTours from '../Components/OurTours'
import AboutUs from '../Components/AboutUs'
import OurTeam from '../Components/OurTeam'
import Newsletter from '../Components/Newsletter'








const Home = () => {
  
  return (

    <>

      <header>
        <HeroImageSlider />
      </header>

      <main>
        <section>
          <OurTours />
        </section>
        <article>
          <AboutUs />
        </article>
        <section>
          <OurTeam />
        </section>
        <section>
          <Newsletter />
        </section>
      </main>

    </>
  )
}

export default Home