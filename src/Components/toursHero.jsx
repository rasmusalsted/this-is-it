import React from 'react'

// Assets
import Space from "../Assets/banner-ture.jpg"

const ToursHero = () => {

    return (

        <section>

            <div className='relative w-full h-[400px]'>
                <img className='top-0 left-0 object-cover w-full h-full ' src={Space} alt="outerspace" />
                <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>
                    <div className='max-w-[1280px] m-auto p-4'>
                        <h1>Ture</h1>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default ToursHero