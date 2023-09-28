import React from 'react'
import NewsBg from "../Assets/newsmail-bg.jpg"
import NewsSub from './NewsSub'

const Newsletter = () => {

    return (

        <div className='my-10 '>

            <div className='relative w-full h-[400px]'>
                <img className='top-0 left-0 object-cover w-full h-full ' src={NewsBg} alt="mars ørken" />
                <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>
                    <div className='max-w-[1280px] m-auto p-4'>

                        <NewsSub/>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Newsletter