import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"



const LightboxGallery = () => {

    const slides = [
        {
            url: "https://images.pexels.com/photos/8474484/pexels-photo-8474484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Lobster"
        },
        {
            url: "https://images.pexels.com/photos/7527862/pexels-photo-7527862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Sushi"
        },
        {
            url: "https://images.pexels.com/photos/5259407/pexels-photo-5259407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Pasta"
        },
        {
            url: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Salmon"
        },
        {
            url: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Salmon"
        },
        {
            url: "https://images.pexels.com/photos/8474492/pexels-photo-8474492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Salmon"
        },
        {
            url: "https://images.pexels.com/photos/8474420/pexels-photo-8474420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Salmon"
        },
        {
            url: "https://images.pexels.com/photos/34521/space-shuttle-lift-off-liftoff-nasa.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Salmon"
        },
    ];



    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='bg-[var(--gray)]'>

            <div className='max-w-[1400px] md:h-[800px] h-[580px] w-full m-auto py-16 px-4 relative group'>
                <figure className='w-full h-full duration-500 bg-center bg-cover rounded-2xl'
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
                </figure>
                {/* Left Arrow*/}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full group-hover:bg-black/20  text-white cursor-pointer p-2'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow*/}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full group-hover:bg-black/20  text-white cursor-pointer p-2'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className='flex justify-center py-2 top-4'>
                    {slides.map((slide, slideIndex) => (

                        <div className='text-2xl text-[var(--green)] cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled />
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
    )
}

export default LightboxGallery