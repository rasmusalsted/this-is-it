import React from 'react'
import useAxios from '../Helpers/useAxios'
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';



const NewsSub = () => {

    const { data, isLoading, error, makeRequest } = useAxios();

    const handleSubmit = e => {

        e.preventDefault(); // husk for at undgå reload ved submit

        // lav et formdataobjekt af indholdet fra formularen (e.target)
        let fd = new FormData(e.target)

        makeRequest("newssubscription", null, null, "POST", fd)

        console.log("tilmelding lykkedes")

        //Tøm formular
        e.target.reset();

    }



        return (
            <div className='text-center'>

                {error && <Error />}
                {isLoading && <Loading />}
                {data && <h2 className='pb-5 text-5xl text-[var(--green)]'>Tak for din tilmelding</h2>}

                <div>
                    <h2 className='text-4xl'>Tilmeld dig og få 25% rabat</h2>
                    <p className='my-6'>Tilmeld dig vores nyhedsbrev og få 25% rabat på din første tur!</p>
                    {
                        !data && !error &&
                        <form className='grid gap-2 md:grid-cols-3' onSubmit={handleSubmit}>
                            <input className='w-full px-2 py-4 placeholder-white bg-white/60 md:col-span-2 ' type="email" placeholder='Din Email' name="email" required />
                            <button className='px-7 py-4 w-full bg-[var(--green)] text-white' type='submit'>Tilmeld</button>
                        </form>
                    }

                </div>

            </div>
        )
    }

    export default NewsSub