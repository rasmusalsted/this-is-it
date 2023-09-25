
import { useEffect } from 'react';
import { Link } from "react-router-dom";


// Icons
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus, BiLogoInstagram, BiDotsVerticalRounded, BiSolidPhone, BiSolidCircle } from 'react-icons/bi';
import { MdMail } from "react-icons/md"
import { FaLocationArrow } from "react-icons/fa"


//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';



const Footer = () => {

    let Links = [
        { name: "Rumfærgen", link: "/Rumfærgen" },
        { name: "Ture", link: "/Ture" },
        { name: "Galleri", link: "/Galleri" },
        { name: "Sikkerhed", link: "/Sikkerhed" },
        { name: "Kontakt", link: "/Kontakt" },
        { name: "Admin", link: "/Admin" },
    ];


    // Get contact info 
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("footer")

    }, []) // lyt efter ændringer i data der slettes


    return (

        <footer>

            <div className='bg-[var(--blue)] py-12 text-white'>

                {error && <Error />}
                {isLoading && <Loading />}

                <div className='max-w-[1280px] px-4 m-auto'>

                    <div className='justify-between md:flex-row md:flex'>

                        <div className='flex flex-col mb-16'>
                            <h5 className='mb-10 text-xl text-center uppercase md:text-left'>kontakt</h5>
                            <div className='m-auto'>
                                <a href=""><p className='flex flex-row items-center mb-4 hover:text-[var(--green)]'><BiSolidPhone size={20} color='01B3A7' className='mr-4' /> {data?.phone}</p></a>
                                <a href=""><p className='flex flex-row items-center mb-4 hover:text-[var(--green)]'><MdMail size={20} color='01B3A7' className='mr-4' /> {data?.email}</p></a>
                                <a href=""><p className='flex flex-row items-center hover:text-[var(--green)]'><FaLocationArrow size={20} color='01B3A7' className='mr-4' /> {data?.address}</p></a>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h5 className='mb-8 text-xl text-center uppercase md:text-left'>Hurtig links</h5>
                            <div className='m-auto text-center md:text-left'>
                                <ul className='flex flex-wrap justify-around md:justify-normal max-w-[300px]'>
                                    {
                                        Links.map((link) => (
                                            <Link to={link.link}>
                                                <li className='hover:text-[var(--green)]' key={link.name}>
                                                    <p className='flex items-center pr-6'><BiSolidCircle size={15} className='pr-2' color='01B3A7' /> {link.name}</p>
                                                </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                                <Link to="/Kontakt"><button className='mt-8 transition duration-300 ease-in-out hover:bg-green-600'>Kontakt</button></Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='bg-[var(--dark-blue)] py-8 text-white/50'>

                <div className='max-w-[1280px] px-4 m-auto text-center md:grid md:grid-cols-2'>

                    <div className='pb-4 md:pb-0 '>
                        <p className=''>© 2021 Space Venture. All rights reserved.</p>
                    </div>

                    <div className='flex justify-center'>
                        <a className='px-2' href=""><BiLogoFacebook size={25} /></a>
                        <a className='px-2' href=""><BiLogoTwitter size={25} /></a>
                        <a className='px-2' href=""><BiLogoGooglePlus size={25} /></a>
                        <a className='px-2' href=""><BiLogoInstagram size={25} /></a>
                    </div>
                    
                </div>

            </div>

        </footer>


    )
}

export default Footer