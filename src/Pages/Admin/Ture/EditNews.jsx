import { useEffect } from 'react'
import useAxios from '../../../Helpers/useAxios'
import { useParams, useNavigate } from 'react-router-dom'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'


const EditNews = () => {

  // Snup ID'en fra url'ens parameter
  const { newsID } = useParams();
  console.log(newsID)

  // GET nyhed - opret en nyhed
  const { data, isLoading, error, makeRequest } = useAxios()

  // RET nyhed - opret en nyhed
  const { data: dataEdit, isLoading: isLoadingEdit, error: errorEdit, makeRequest: makeRequestEdit } = useAxios()

  const navigate = useNavigate();

  useEffect(() => {

    // Hent data for den nyhed som har den ID som er i url'en
    makeRequest("tours/" + newsID)

  }, [])

  const handleSubmit = e => {

    e.preventDefault(); // husk for at undgå reload ved submit

    // lav et formdataobjekt af indholdet fra formularen (e.target)
    let fd = new FormData(e.target)

    makeRequestEdit("tours/admin/" + newsID, null, null, "PUT", fd)

    console.log("formular afsendt")

    // navigate tilbage til admin siden
    navigate("/Admin/NewsAdmin")


  }





  return (

    <div className='my-[150px] max-w-[1280px] mx-auto'>

      {isLoading || isLoadingEdit && <Loading />}
      {error || errorEdit && <Error />}



      <h1 className='mb-8 text-center'>Ret tur</h1>

      {data &&
        <form onSubmit={handleSubmit} className='flex flex-col border'>

          {/* title */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>titel:</label>
            <input name='title' type="text" defaultValue={data.title} placeholder='Skriv en nyhedstitel' required />
          </div>


          {/* content */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>Content:</label>
            <textarea className='w-full h-[150px]' name='content' defaultValue={data.content} placeholder='Skriv en nyhed' required />
          </div>

          {/* traveltime */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>traveltime:</label>
            <input name='traveltime' type="text" defaultValue={data.traveltime} placeholder='Skriv en nyhedstitel' required />
          </div>

          {/* destination */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>destination:</label>
            <input name='destination' type="text" defaultValue={data.destination} placeholder='Skriv en nyhedstitel' required />
          </div>

          {/* distance */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>distance:</label>
            <input name='distance' type="text" defaultValue={data.distance} placeholder='Skriv en nyhedstitel' required />
          </div>

          {/* price */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>spacelaunch:</label>
            <input name='spacelaunch' type="text" defaultValue={data.spacelaunch} placeholder='Skriv en nyhedstitel' required />
          </div>

          {/* image */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>Nuværende billede:</label>
            <img className='pb-4' src={"http://localhost:4444/images/tours/" + data.image1} width="200"></img>
            <input name='image' type="file" />
          </div>

          {/* image2 */}
          <div className='p-2 m-2 border'>
            <label className='mr-4 font-bold'>Nuværende billede:</label>
            <img className='pb-4' src={"http://localhost:4444/images/tours/" + data.image1} width="200"></img>
            <input name='image' type="file" />
          </div>


          <div className='p-2 m-2 text-center'>
            <button className='text-black ' type='submit'>ret tur</button>
          </div>

        </form>
      }

    </div>
  )
}

export default EditNews