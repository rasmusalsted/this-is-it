import React from 'react'
import { useEffect, useState } from 'react';
import parser from 'html-react-parser';

//Icons
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';


const HomeHero = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("slider")

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

        <div className='relative w-full h-[400px] md:h-[80vh]'>

            {error && <Error />}
            {isLoading && <Loading />}


            {/* SLIDER CONTENT */}
            {
                data &&

                data.map((item, index) => (

                    <div key={item._id} className={`slider-item ${index === currentIndex ? 'block' : 'hidden'}`}>
                        <div className='absolute top-0 left-0 w-full h-full '>
                            <div className='relative w-full h-full'>
                                <div className='absolute top-0 left-0 w-full h-full bg-slate-600/40'></div>
                                <img className='object-cover w-full h-full' src={'http://localhost:5333/images/slider/' + item.image} />
                                <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full '>
                                    <h1 className='text-3xl text-center text-white md:text-5xl'> {parser(item.caption)}</h1>
                                    <div className='text-center'>
                                        <button className='mt-12'>kontakt os</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                ))

            }

            {/* SLIDER NAVIGATION */}
            <div className='slider-controls'>
                <BsChevronCompactLeft size={50} onClick={handlePrev} className='slider-control absolute top-[50%] -translate-x-0-[50%] translate-y-[-50%] left-5 text-2xl rounded-full group-hover:bg-black/20  text-white cursor-pointer p-2' />

                <BsChevronCompactRight size={50} onClick={handleNext} className='slider-control absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full group-hover:bg-black/20  text-white cursor-pointer p-2' />
            </div>

          

        </div >

    )
}

export default HomeHero