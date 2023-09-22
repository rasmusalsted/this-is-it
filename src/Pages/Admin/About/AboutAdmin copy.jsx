import { useEffect } from 'react'
import useAxios from '../../../Helpers/useAxios'
import { useNavigate } from 'react-router-dom'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'




const AboutAdmin = () => {


    // GET hent den ene about der er
    const { data, isLoading, error, makeRequest } = useAxios()

    // PUT About - ret about
    const { data: dataEdit, isLoading: isLoadingEdit, error: errorEdit, makeRequest: makeRequestEdit } = useAxios()

    const navigate = useNavigate();


    // hent about når component er klar/loadet
    useEffect(() => {

        // Hent data for den nyhed som har den ID som er i url'en
        makeRequest("about")

    }, [])

    const handleSubmit = e => {

        e.preventDefault(); // husk for at undgå reload ved submit

        // lav et formdataobjekt af indholdet fra formularen (e.target)
        let fd = new FormData(e.target)

        makeRequestEdit("about/admin", null, null, "PUT", fd)

        console.log("formular afsendt")

        /*         // navigate tilbage til admin siden
                navigate("/Admin/NewsAdmin") */


    }





    return (

        <div className='my-[150px] max-w-[1280px] mx-auto'>

            {isLoading || isLoadingEdit && <Loading />}
            {error || errorEdit && <Error />}
            



            <h1 className='mb-8 text-center'>Ret About indholdet</h1>

            {data &&
                <form onSubmit={handleSubmit} className='flex flex-col border'>

                    {/* title */}
                    <div className='p-2 m-2 border' >
                        <label className='mr-4 font-bold'>titel:</label>
                        <input name='title' type="text" defaultValue={data.title} placeholder='Skriv om-os sidens titel' required />
                    </div>


                    {/* teaser */}
                    <div className='p-2 m-2 border'>
                        <label className='mr-4 font-bold'>teaser:</label>
                        <textarea className='w-full h-[150px]' name='teaser' defaultValue={data.teaser} placeholder='teaser tekst' required />
                    </div>



                    {/* content */}
                    <div className='p-2 m-2 border'>
                        <label className='mr-4 font-bold'>om-os sidens tekst:</label>
                        <textarea className='w-full h-[150px]' name='content' defaultValue={data.content} placeholder='Skriv om-os tekst' required />
                    </div>


                    {/* image - HUSK name */}
                    <div className='p-2 m-2 border'>
                        <label className='mr-4 font-bold'>Nuværende billede:</label>
                        <img className='pb-4' src={"http://localhost:5333/images/about/" + data.image} width="200"></img>
                        <input name='image' type="file" />
                    </div>


                    <div className='p-2 m-2 text-center'>
                        <button className='text-black ' type='submit'>ret om-os</button>
                    </div>

                </form>
                
            }
            
            {dataEdit && <h3>om os indhold rettet</h3>}

        </div>
    )
}

export default AboutAdmin