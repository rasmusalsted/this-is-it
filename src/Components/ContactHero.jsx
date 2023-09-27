
import { useEffect } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail, MdLocationOn } from "react-icons/md"

//components
import LeafletMap from './LeafletMap';
import ContactForm from '../Helpers/ContactForm';
import useAxios from '../Helpers/useAxios';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';




const ContactHero = ({ coord }) => {


    // Get data
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("footer")

    }, []) // lyt efter ændringer i data der slettes

    return (

        <div>

            {error && <Error />}
            {isLoading && <Loading />}
            {
                data &&
                <div className='max-w-[1280px] my-16 m-auto px-4'>

                    <div className='grid gap-5'>


                        <div>
                            <LeafletMap coord={[56, 10]} popupinfo={"Du kan finde os her: <br> " + data?.address + " " + data?.zipcity} />
                        </div>
                        
                        <ContactForm />

                    </div>

                </div>
            }
        </div>

    )
}

export default ContactHero