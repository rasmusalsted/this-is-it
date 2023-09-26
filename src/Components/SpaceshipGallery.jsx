import React from 'react'
import { useEffect } from 'react';
import parser from "html-react-parser"

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';

//Assets
import Space from "../Assets/banner-spaceship.jpg"
import SpaceshipSliderGallery from './SpaceshipSliderGallery';


const SpaceshipGallery = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("gallery")

    }, []) // lyt efter ændringer i data der slettes




    return (

        <section className='mb-16'>

            {error && <Error />}
            {isLoading && <Loading />}

            <h2 className='mb-8 text-center'>Galleri</h2>

            {
                data &&

                <div>
                    {error && <Error />}
                    {isLoading && <Loading />}

                    {
                        data &&

                        <div className='hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4'>


                            {data.map((item) => (

                                <div key={item._id} className='grid'>
                                    <img className='object-cover w-full h-full' src={'http://localhost:4444/images/gallery/' + item.image} />

                                </div>

                            ))}


                        </div>
                    }

                </div>
            }
            <div className='md:hidden'>
                <SpaceshipSliderGallery />
            </div>

        </section>

    )
}

export default SpaceshipGallery