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

        <section className='my-16 px-4 max-w-[1280px] m-auto'>
            
            {error && <Error />}
            {isLoading && <Loading />}

            <h2 className='text-center'>Vores Team</h2>

            {
                data &&
                
                <div>
                    <div>
                        
                    </div>
                </div>
            }



        </section>

    )
}

export default OurTeam