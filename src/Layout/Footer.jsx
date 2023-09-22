
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';



const Footer = () => {


    // Get contact info 
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("contactinformation")

    }, []) // lyt efter ændringer i data der slettes


    return (

        <div className='bg-[var(--onyx)] py-16 text-white'>

            {error && <Error />}
            {isLoading && <Loading />}

            <div className='max-w-[1280px] px-4 m-auto md:grid md:grid-cols-4 md:gap-4 lg:gap-10'>

                <div className='p-2 md:p-0'>
                    <img className='w-[150px] pb-4' src={logo} alt="logo" />
                    <p className='text-white/70'>Som medlem af Elinstallatørenes Landsorgination, EFLO, er vi tilsulttet et ankernævn og en garantiordning</p>
                </div>

                <div className='pt-6'>
                    <h4 className='pb-2 text-xl font-semibold'>Links</h4>
                    <ul className='text-white/70'>
                        <Link to='/Faq'><li className=' py-2 hover:text-[var(--safety-orange-blaze-orange)] '> &gt; FAQ</li></Link>
                        <Link to='/Omos'><li className=' py-2 hover:text-[var(--safety-orange-blaze-orange)] '>&gt; Om os</li></Link>
                        <Link to='/Kontakt'><li className=' py-2 hover:text-[var(--safety-orange-blaze-orange)] '>&gt; Kontakt os</li></Link>
                        <Link to='/Service'><li className=' py-2 hover:text-[var(--safety-orange-blaze-orange)] '>&gt; Services</li></Link>
                    </ul>
                </div>

                <div className='pt-6'>
                    <h4 className='pb-2 text-xl font-semibold'>Kontakt os</h4>
                    {
                        data &&
                        <ul className='text-white/70'>
                            <li className='py-2 '>Adresse: {data.address}, {data.zipcity}</li>
                            <li className='py-2 '>Telefon: {data.phone}</li>
                            <li className='py-2 '>Email: {data.email}</li>
                        </ul>
                    }

                </div>

                <div></div>

            </div>

        </div>


    )
}

export default Footer