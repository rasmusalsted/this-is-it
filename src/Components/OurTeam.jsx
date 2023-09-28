import React from 'react'
import { useEffect } from 'react';

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';


const OurTeam = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("team")

    }, []) // lyt efter ændringer i data der slettes




    return (

        <div className='my-16 px-12 md:px-4  max-w-[1280px] m-auto'>

            {error && <Error />}
            {isLoading && <Loading />}

            <h2 className='text-center mb-[100px]'>Vores Team</h2>

            {
                data &&

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-[100px] lg:gap-12'>

                    {data.map(item => (

                        <div key={item._id}>
                            <div className='flex flex-col items-center bg-[var(--gray)] '>
                                <img className='w-[140px] rounded-full p-3 mt-[-70px] bg-white' alt='medarbejdere' src={'http://localhost:4444/images/team/' + item.image} />
                                <div className='text-center'>
                                    <p className='mt-6 mb-2 font-bold'>{item.name}</p>
                                    <p className='mb-2 text-[var(--green)]'>{item.role}</p>
                                    <p className='mb-6'>{item.phone}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            }

        </div>

    )
}

export default OurTeam