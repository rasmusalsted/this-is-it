import React from 'react'

// Assets
import Safety from "../Assets/2.jpeg"
import Astronaut from "../Assets/astronaut.avif"

const SafetyHero = () => {

    return (

        <section>

            <div className='relative w-full h-[400px]'>
                <img className='top-0 left-0 object-cover w-full h-full ' src={Safety} alt="outerspace" />
                <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>
                    <div className='max-w-[1280px] m-auto p-4'>
                        <h1>Sikkerhed</h1>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default SafetyHero