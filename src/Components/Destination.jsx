import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useAxios from '../Helpers/useAxios';

const NyhedArtikel = () => {

    const { newsID } = useParams();

    // GET news
    const { data, isLoading, error, makeRequest } = useAxios()

    useEffect(() => {

        makeRequest("tours/" + newsID)

    }, []) // lyt efter ændringer i data der slettes



    return (

        <div className='p2 max-w-[1280px] m-auto my-[150px]'>

            {error && <Error />}
            {isLoading && <Loading />}

            {
                data &&

                <div>

                    {data.title}

                </div>
            }



        </div>
    )
}

export default NyhedArtikel