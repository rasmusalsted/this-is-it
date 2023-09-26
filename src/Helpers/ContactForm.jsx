import React from 'react'


//Components
import useAxios from '../Helpers/useAxios'
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';



const ContactForm = () => {

    const { data, isLoading, error, makeRequest } = useAxios();

    const handleSubmit = e => {

        e.preventDefault(); // husk for at undgå reload ved submit

        // lav et formdataobjekt af indholdet fra formularen (e.target)
        let fd = new FormData(e.target)

        makeRequest("contact", null, null, "POST", fd)

        console.log("Besked afsendt")

        //Tøm formular
        e.target.reset();

    }

    return (

        <div>

            {error && <Error />}
            {isLoading && <Loading />}
            {data && <h2 className='my-4'>Tak for din Besked</h2>}

            <div className='items-center md:flex'>
                <h3 className='pb-2 pr-4 '>Kontakt</h3>
                <p className='pb-2 text-black '>Skulle du sidde med et spørgsmål eller to, så skriv endelig til os vi vil kontakte dig hurtigst muligt</p>
            </div>


            <form onSubmit={handleSubmit} className='grid grid-cols-1'>
                <div className='flex gap-3'>
                    <input required type="text" placeholder='Dit Navn' name='name' className='w-full p-4 my-2 rounded-sm bg-[var(--gray)] placeholder-black' />
                    <input required type="email" placeholder='E-mail' name='email' className='w-full p-4 my-2 rounded-sm bg-[var(--gray)] placeholder-black' />
                    <input required type="phone" placeholder='Tlf' name='phone' className='w-full p-4 my-2 rounded-sm bg-[var(--gray)] placeholder-black' />
                </div>
                <div className=''>

                    <textarea placeholder='besked' name='message' className='w-full p-4 my-2 rounded-sm md:mr-5 bg-[var(--gray)] placeholder-black' id="" cols="30" rows="6"></textarea>
                </div>
                <div>
                    <button className='px-[100px]'>send</button>
                </div>
            </form>

        </div>

    )

}

export default ContactForm