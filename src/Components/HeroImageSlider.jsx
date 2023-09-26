import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Mousewheel } from 'swiper/modules';

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';



const HeroImageSlider = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("banner")

    }, []) // lyt efter ændringer i data der slettes

    
    // Span i heading
    const newHeading = (str) => {
        const words = str.split(' ');
        const lastWord = words.pop();
        const remainingText = words.join(' ');
        const resultTxt = <>{remainingText} <span className='font-bold'>{lastWord}</span></>
        return resultTxt;
    } 


    return (

        <div className=''>

            <div className=''>

                {error && <Error />}
                {isLoading && <Loading />}

                {
                    data &&
                    <div className=''>
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={1}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Mousewheel, Pagination]}
                            className="mySwiper"
                        >

                            {data.map((item) => (

                                <SwiperSlide>
                                    <div key={item._id} className='w-full h-full'>
                                        <img className='object-cover w-full h-full' src={'http://localhost:4444/images/banner/' + item.image} />
                                        <div className='absolute top-0 flex flex-col justify-center w-full h-full mx-4 items-left'>
                                            <div className='md:ml-[297px]'>
                                                <p className='z-50 pb-4 text-white uppercase'>{item.title}</p>
                                                <h1 className='z-50 text-3xl font-normal text-white lg:text-5xl'>{newHeading(item.content)}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                }

            </div>

        </div>

    )
}

export default HeroImageSlider