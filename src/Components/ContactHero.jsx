
import { useEffect } from 'react'


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


                        <div className='z-0'>
                            <LeafletMap coord={[56, 10]} popupinfo={"Du kan finde os her: <br> " + data?.address } />
                        </div>
                        
                        <ContactForm />

                    </div>

                </div>
            }
        </div>

    )
}

export default ContactHero