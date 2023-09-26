import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import parser from "html-react-parser"

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';

//Assets
import OmOs from "../Assets/om-os.jpg"


const AboutUs = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("about")

    }, []) // lyt efter ændringer i data der slettes




    return (

        <section className='my-16 px-4 max-w-[1280px] m-auto'>

            {error && <Error />}
            {isLoading && <Loading />}

            <div className='grid gap-5 md:gap-20 md:grid-cols-2'>

                <div className='self-center'>
                    <img className='object-cover w-full h-full' src={OmOs} alt="" />
                </div>

                {
                    data &&
                    <div className='self-center text-center md:text-left'>
                        <h2 className='mb-4'>Lidt om os</h2>
                        <p className='py-1 my-4 md:my-0 text-xl  uppercase border-y-2 text-[var(--green)] border-[var(--green)] md:border-none'>{data.title}</p>
                        <div className="relative hidden mb-4 md:block">
                            <p className="relative z-10 border-t-2 border-[#01b3a7] w-[227px]"></p>
                            <p className="absolute inset-0 border-t-2 border-[#F3F3F3] w-full"></p>
                        </div>
                        <p className='mb-8 '>{parser(data.content)}</p>
                        <div className=''>
                            <Link><button className='duration-200 border-2 hover:text-black hover:bg-transparent hover:border-2-transparent'>Kontakt os</button></Link>
                        </div>
                    </div>
                }


            </div>

        </section>

    )
}

export default AboutUs