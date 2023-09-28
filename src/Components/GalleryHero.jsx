import React from 'react'

// Assets
import HeroImg from "../Assets/newsmail-bg.jpg"

const GalleryHero = () => {

    return (

        <div>

            <div className='relative w-full h-[400px] overflow-hidden'>
                <img className='top-0 left-0 object-cover w-full h-full animate__heartBeat animate__animated ' src={HeroImg} alt="outerspace" />
                <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>
                    <div className='max-w-[1280px] m-auto p-4'>
                        <h1>Galleri</h1>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default GalleryHero