import React from 'react'
import { Link } from "react-router-dom";

// Assets
import Mars from "../Assets/mars-btn.jpg"
import Moon from "../Assets/moon-btn.jpg"




const OurTours = () => {
    return (

        <section className='bg-[var(--gray)]'>

            <div className='flex m-auto py-16 max-w-[1280px] mt-[-110px] relative z-50'>

                <div className='grid grid-cols-1 gap-10 m-auto md:grid-cols-2'>

                    <Link to="/Månen">
                        <div className='relative overflow-hidden cursor-pointer'>
                            <img src={Moon} alt="Moon" className='w-full h-auto transition-transform transform scale-100 duration-400 hover:scale-110' />
                            <div className='absolute text-center top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-[-50%] text-white'>
                                <h2>Månen</h2>
                            </div>
                        </div>
                    </Link>

                    <Link to="/Mars">
                        <div className='relative overflow-hidden cursor-pointer'>
                            <img src={Mars} alt="Moon" className='w-full h-auto transition-transform transform scale-100 duration-400 hover:scale-110' />
                            <div className='absolute text-center top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-[-50%] text-white'>
                                <h2>Mars</h2>
                            </div>
                        </div>
                    </Link>


                </div>

            </div>

            <div className='pb-16 text-center'>
                <Link><p>Vores ture →</p></Link>
            </div>

        </section>
    )
}

export default OurTours