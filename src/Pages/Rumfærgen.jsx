import React from 'react'

import WhyUs from '../Components/WhyUs'
import SpaceshipHero from '../Components/SpaceshipHero'
import SpaceshipGallery from '../Components/SpaceshipGallery'



const Rumfærgen = () => {

  return (

    <>
      <header>
        <SpaceshipHero />
      </header>
      <main>
        <WhyUs />
        <figure>
          <SpaceshipGallery />
        </figure>
      </main>
    </>
  )
}

export default Rumfærgen