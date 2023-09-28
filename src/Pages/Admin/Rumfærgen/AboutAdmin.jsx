import { useEffect, useRef } from 'react'
import useAxios from '../../../Helpers/useAxios'
import { useNavigate } from 'react-router-dom'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'

//quill editor
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

//MED react-quill editor

const AboutAdmin = () => {


    // GET hent den ene spacecraft der er
    const { data, isLoading, error, makeRequest } = useAxios()

    // PUT spacecraft - ret spacecraft
    const { data: dataEdit, isLoading: isLoadingEdit, error: errorEdit, makeRequest: makeRequestEdit } = useAxios()


    // QUILL-ting
    const refQuill = useRef();
    let tools = [["bold", "italic", "underline", { "list": "ordered" }, { "list": "bullet" }]]



    // hent spacecraft når component er klar/loadet
    useEffect(() => {

        // Hent data for den nyhed som har den ID som er i url'en
        makeRequest("spacecraft")


    }, [dataEdit])

    const handleSubmit = e => {

        e.preventDefault(); // husk for at undgå reload ved submit

        // lav et formdataobjekt af indholdet fra formularen (e.target)
        let fd = new FormData(e.target)

        //tilføj quill indhold til formdata (fd)
        fd.append("content", refQuill.current.value)

        makeRequestEdit("spacecraft/admin", null, null, "PUT", fd)

        console.log("formular afsendt")

    }





    return (

        <div className='my-[150px] max-w-[1280px] mx-auto'>

            {isLoading || isLoadingEdit && <Loading />}
            {error || errorEdit && <Error />}




            <h1 className='mb-8 text-center'>Ret rumfærgen siden</h1>

            {data &&
                <form onSubmit={handleSubmit} className='flex flex-col border'>

                    {/* title */}
                    <div className='p-2 m-2 border' >
                        <label className='mr-4 font-bold'>title:</label>
                        <input className='w-full' name='title' type="text" defaultValue={data.title} placeholder='Skriv om-os sidens titel' required />
                    </div>


                    {/* content */}
                    <div className='p-2 m-2 border'>
                        <label className='mr-4 font-bold'>content:</label>
                        {/*  <textarea className='w-full h-[150px]' name='content' defaultValue={data.content} placeholder='Skriv om-os tekst' required /> */}

                        <ReactQuill
                            theme='snow'
                            modules={{ toolbar: tools }}
                            placeholder='Skriv om-os tekst...'
                            value={data.content}
                            ref={refQuill}
                        />

                    </div>


                    {/* image - HUSK name */}
                    <div className='p-2 m-2 border'>
                        <label className='mr-4 font-bold'>Nuværende billede:</label>
                        <img className='pb-4' src={"http://localhost:4444/images/spacecraft/" + data.image} width="200"></img>
                        <input name='image' type="file" />
                    </div>


                    <div className='p-2 m-2 text-center'>
                        <button className='text-black border' type='submit'>Gem ændringer</button>
                    </div>

                </form>

            }

            {dataEdit && <h3>Rumfærgen indhold rettet</h3>}

        </div>
    )
}

export default AboutAdmin