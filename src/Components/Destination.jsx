import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';

// Icons
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus, BiLogoInstagram, BiDotsVerticalRounded } from 'react-icons/bi';

//Npms
import parser from "html-react-parser"
import Countdown from 'react-countdown';


const Destination = () => {

    const { tureID } = useParams();

    // GET tur
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("tours/" + tureID)

    }, [tureID]) // lyt efter ændringer i data der slettes



    return (

        <section className='my-16 px-4 max-w-[1280px] m-auto'>

            {error && <Error />}
            {isLoading && <Loading />}

            {
                data &&

                <div className='grid gap-12 md:grid-cols-2'>


                    <div className='flex flex-col gap-8 '>
                        <img className='object-cover w-full h-full max-h-[332px]' src={'http://localhost:4444/images/tours/' + data.image1} />
                        <img className='object-cover w-full h-full max-h-[332px]' src={'http://localhost:4444/images/tours/' + data.image2} />
                    </div>

                    <div className='text-center text-gray-500 md:text-left md:max-w-[80%] relative'>

                        <p className=' text-black  inline-block pb-3 mb-3 text-xl font-bold border-b-4 border-[var(--green)]'>{data.destination}</p>
                        <p className=''>{data.title}</p>
                        <p className='text-[var(--green)] font-bold'>Næste afgang! - <Countdown date={data.spacelaunch} /></p>

                        <div>

                            <div className='
                                relative mt-2 mb-8
                                before:content-[attr(data-tip)]
                                before:absolute 
                                before:px-3 before:py-2
                                before:left-1/4 before:-top-3
                                before:w-max before:max-w-xs
                                before:-translate-x-1/2 before:translate-y-full
                                before:bg-gray-700 before:text-white
                                before:rounded-md before:opacity-0
                                before:transition-all
            
                                hover:before:opacity-100 hover:after:opacity-100'
                                
                                data-tip="Ud af 5 stjerner!"
                            >
                                {
                                    [...Array(data.rating)].map(star =>
                                        <span className='cursor-pointer '>⭐</span>
                                    )
                                }
                            </div>
                        </div>

                        <p className='mb-8'>{parser(data.content)}</p>




                        <div className='py-8 border-y-2'>
                            <div className='m-auto text-left w-[250px] md:m-0'>
                                <p className='pb-3'><span className='font-bold text-black '>Destination: </span>{data.destination}</p>
                                <p className='pb-3'><span className='font-bold text-black '>Pris: </span>{data.price}</p>
                                <p className='pb-3'><span className='font-bold text-black '>Afstand fra jorden: </span>{data.distance}</p>
                                <p><span className='font-bold text-black '>Flyvetid: </span>{data.traveltime}</p>
                            </div>
                        </div>

                        <div className='flex justify-center pt-8 text-black md:justify-start'>
                            <a className='px-2' href=""><BiLogoFacebook size={25} /></a>
                            <a className='px-2' href=""><BiLogoTwitter size={25} /></a>
                            <a className='px-2' href=""><BiLogoGooglePlus size={25} /></a>
                            <a className='px-2' href=""><BiLogoInstagram size={25} /></a>
                        </div>

                        <div className='absolute top-0 right-0 z-40 pricetag bg-[var(--green)] p-2 text-white'>
                            {data.price}
                        </div>
                    </div>

                </div>
            }


        </section>

    )
}

export default Destination