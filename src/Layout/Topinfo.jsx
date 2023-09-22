import {useEffect} from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

//Helpers
import useAxios from '../Helpers/useAxios'

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';



const Topinfo = () => {

    const { data, isLoading, error, makeRequest } = useAxios();

    useEffect(() => {

        makeRequest("contactinformation")

    }, [])


    return (

        <div className='bg-[var(--onyx)] pt-4 pb-20 md:pb-8  w-full'>

            {error && <Error />}
            {isLoading && <Loading />}

            <div className='max-w-[1240px] md:m-auto flex flex-col items-center text-center md:flex-row md:pb-6 md:justify-between'>
                {/* LOGO TOP LEFT */}
                <Link to="/"><img className='w-[150px] pb-4' src={logo} alt="logo" /></Link>

                {/* TOP RIGHT */}
                {
                    data &&
                    <ul className='flex flex-col md:flex-row'>
                        <li><p className='p-2 text-white md:pl-8 md:p-0'>{data.address}, {data.zipcity}</p></li>
                        <li><p className='p-2 text-white md:pl-8 md:p-0'>{data.openinghours}</p></li>
                        <li><p className='p-2 text-white md:pl-8 md:p-0'>{data.phone}</p></li>
                    </ul>
                }
            </div>
        </div>
    );
};

export default Topinfo;







