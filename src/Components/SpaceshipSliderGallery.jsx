import React from 'react'
import { useEffect, useState } from 'react';


//Icons
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx"


//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';


const SpaceshipSliderGallery = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("gallery")

    }, []) // lyt efter ændringer i data der slettes


    // SLIDER
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.length || 1));
        }, 4000); // Skifter billde hver 4. sekund

        return () => {
            clearInterval(slideInterval);
        };
    }, [data]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (data.length || 1)) % (data.length || 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.length || 1));
    };


    return (

        <div className=''>

            {error && <Error />}
            {isLoading && <Loading />}


            {/* SLIDER CONTENT */}
            {
                data &&

                data.map((item, index) => (

                    <div key={item._id} className={`slider-item ${index === currentIndex ? 'block' : 'hidden'}`}>

                        <div className=''>
                            <img className='object-cover w-full h-full' src={'http://localhost:4444/images/gallery/' + item.image} />
                        </div>

                    </div>

                ))

            }

            {/* SLIDER NAVIGATION */}
            <div className='flex justify-between mx-16 mt-5 slider-controls'>
                <BsChevronCompactLeft size={50} onClick={handlePrev} className='p-2 text-2xl text-[var(--green)] rounded-full cursor-pointer slider-control group-hover:bg-black/20' />

                <BsChevronCompactRight size={50} onClick={handleNext} className='p-2 text-2xl text-[var(--green)] rounded-full cursor-pointer slider-control group-hover:bg-black/20' />
            </div>


        </div >

    )
}

export default SpaceshipSliderGallery