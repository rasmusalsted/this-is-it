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
            {data && <h2>Tak for din Besked</h2>}
            
            <div>
                <h3 className='pb-2'>Kontakt os</h3>
                <p className='pb-2 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos libero distinctio dolorum perferendis laborum sint!</p>
            </div>
            

            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
                <div className=''>
                    <input required type="text" placeholder='Dit Navn' name='name' className='w-full p-2 my-2 border border-gray-300 rounded-md' />
                    <input required type="email" placeholder='Din Email' name='email' className='w-full p-2 my-2 border border-gray-300 rounded-md' />
                    <input required type="phone" placeholder='Telefon nr.' name='phone' className='w-full p-2 my-2 border border-gray-300 rounded-md' />
                </div>
                <div className=''>

                    <textarea placeholder='Din besked...' name='message' className='w-full p-2 my-2 border border-gray-300 rounded-md md:mr-5' id="" cols="30" rows="6"></textarea>
                </div>
                <div><button>send besked</button></div>
            </form>

        </div>

    )

}

export default ContactForm