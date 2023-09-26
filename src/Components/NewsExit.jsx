import React from 'react'
import useAxios from '../Helpers/useAxios'
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';



const NewsExit = () => {

    const { data, isLoading, error, makeRequest } = useAxios();



    const handleSubmitAfmeld = e => {

        e.preventDefault(); // husk for at undgå reload ved submit

        makeRequest("newssubscription/afmeld/" + e.target.emailafmeld.value, null, null, "DELETE")

        console.log("Afmelding lykkedes")

        //Tøm formular
        e.target.reset();

    }



        return (
            <div className='text-center'>

                {error && <Error />}
                {isLoading && <Loading />}
                {data && <p>Du er nu afmeldt</p>}

                <div>


                    {
                        <form onSubmit={handleSubmitAfmeld}>
                            <input className='w-[45%] p-2 my-4 placeholder-white bg-white/60' type="email" placeholder='Din Email' name="emailafmeld" required />
                            <button className='p-2 ml-1 w-[45%] bg-[var(--green)] text-white' type='submit'>Afmeld nyhedsbrev</button>
                        </form>
                    }
                </div>

            </div>
        )
    }

    export default NewsExit