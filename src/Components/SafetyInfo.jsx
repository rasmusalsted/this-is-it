import React from 'react'
import { useEffect } from 'react';
import parser from "html-react-parser"

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';

//Assets
import Astronaut from "../Assets/astro.png"


const SafetyInfo = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("safety")

    }, []) // lyt efter ændringer i data der slettes




    return (

        <div className='my-16 md:my-0 md:mt-16 px-4 max-w-[1280px] m-auto'>

            {error && <Error />}
            {isLoading && <Loading />}

            {
                data &&

                <div>
                    {error && <Error />}
                    {isLoading && <Loading />}

                    {
                        data &&

                        <div className='relative grid gap-5 overflow-hidden md:gap-5 lg:gap-10 md:grid-cols-2 group'>

                            <div className='self-center'>
                                <img className='' src={Astronaut} />
                                <div className='hidden md:flex overlaybox absolute bottom-[-50%] w-[40%] h-[40%] bg-[var(--green)] z-10 group-hover:bottom-0 ease-in-out duration-500  items-end justify-center'>
                                    <h5 className='p-8 text-xl'>"Sikkerhed i rummet: Når du kun har en tynd dragt mellem dig og det kolde, barske rum, begynder du at værdsætte din sikkerhedssnor mere end din yndlings-pizza! 🍕🌌🚀"</h5>
                                </div>

                            </div>

                            <div className='self-center text-center md:text-left '>
                                <h2 className='mb-4 text-5xl text-gray-300'>Hvorfor vælge os</h2>
                                <p className='py-1 my-4 md:my-0 text-xl  uppercase border-y-2 text-[var(--green)] border-[var(--green)] md:border-none'>{data.title}</p>
                                <p className=''>{parser(data.content)}</p>
                            </div>

                        </div>
                    }

                </div>
            }



        </div>

    )
}

export default SafetyInfo