import React from 'react'
import GalleryHero from '../Components/GalleryHero'
import LightboxGallery from '../Components/LightboxGallery'



const Galleri = () => {
 
  return (

    <>
      <header>
      <GalleryHero/>
      </header>
      <main>
        <figure>
      <LightboxGallery/>
        </figure>
      </main>
      
    </>
  )
}

export default Galleri