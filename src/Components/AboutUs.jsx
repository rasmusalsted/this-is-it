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
                        <p className='py-1 my-4 text-xl  uppercase border-y-2 text-[var(--green)] border-[var(--green)]'>{data.title}</p>
                        <p className='mb-8 '>{parser(data.content)}</p>
                        <div className=''>
                            <Link><button>Kontakt os</button></Link>
                        </div>
                    </div>
                }


            </div>

        </section>

    )
}

export default AboutUs