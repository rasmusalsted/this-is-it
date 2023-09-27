import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

//Npms
import parser from "html-react-parser"
import Countdown from 'react-countdown';

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';


const ToursSection = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("tours")

    }, []) // lyt efter ændringer i data der slettes




    return (

        <section className='my-16 px-4 max-w-[1280px] m-auto'>

            {error && <Error />}
            {isLoading && <Loading />}

            {
                data &&

                <div>
                    {error && <Error />}
                    {isLoading && <Loading />}

                    {
                        data &&

                        <div className='grid gap-10 md:grid-rows-2'>

                            {data.map((item) => (


                                <div key={item._id} className='p-2 md:relative md:gap-16 md:p-0 md:border md:grid md:grid-cols-2 md:items-center'>

                                    <div className='relative md:static'>
                                        <img className='object-cover w-full h-full' src={'http://localhost:4444/images/tours/' + item.image1} />
                                        <div className='absolute top-0 right-0 z-50 pricetag bg-[var(--green)] p-2 text-white'>
                                            {item.price}
                                        </div>
                                    </div>

                                    <div className='md:max-w-[400px] md:p-2'>
                                        <div>
                                            <h3 className='mt-6 md:mt-0'>{item.title}</h3>
                                            <p className='text-[var(--green)] font-bold'>Næste afgang! - <Countdown date={item.spacelaunch} /></p>
                                        </div>
                                        <p className='my-6 text-gray-500 line-clamp-3'>{parser(item.content)}</p>
                                        <Link to={'/' + item.destination}><button className='px-16 text-black bg-transparent border-2 border-black'>Se mere</button></Link>

                                    </div>

                                </div>


                            ))}

                        </div>

                    }

                    <div className='max-w-[300px] m-auto my-10 cursor-pointer '>
                        <ul className='flex flex-row justify-between text-black'>
                            <li className='px-4 py-2 border rounded-full'>🢐</li>
                            <li className='px-4 py-2 border rounded-full'>1</li>
                            <li className='px-4 py-2 border rounded-full'>2</li>
                            <li className='px-4 py-2 border rounded-full'>3</li>
                            <li className='px-4 py-2 border rounded-full'>4</li>
                            <li className='px-4 py-2 border rounded-full'>🢒</li>
                        </ul>
                    </div>

                </div>
            }



        </section>

    )
}

export default ToursSection