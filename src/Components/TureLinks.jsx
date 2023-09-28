import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom"

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';


const TureLinks = () => {

    // GET data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("tours")

    }, []) // lyt efter ændringer i data der slettes




    return (

        <div>

            {error && <Error />}
            {isLoading && <Loading />}

            {
                data &&

                <div>

                    {data.map((item) => (

                        <div key={item._id} className=''>
                            
                            <Link to={"Ture/" + item._id}>
                                <p className='p-1'>{item.destination}</p>
                            </Link>

                        </div>

                    ))}

                </div>
            }


        </div>

    )
}

export default TureLinks