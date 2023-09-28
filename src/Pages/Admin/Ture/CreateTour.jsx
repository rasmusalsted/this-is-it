import { useEffect } from 'react'
import useAxios from '../../../Helpers/useAxios'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'


const CreateTour = () => {

  // POST nyhed - opret en nyhed
  const { data, isLoading, error, makeRequest } = useAxios()

  useEffect(() => {
    if (data && data.oprettet) {
      document.forms[0].reset();
    }
  })

  const handleSubmit = e => {

    e.preventDefault(); // husk for at undgå reload ved submit

    // lav et formdataobjekt af indholdet fra formularen (e.target)
    let fd = new FormData(e.target)

    makeRequest("tours/admin", null, null, "POST", fd)

    console.log("formular afsendt")

  }

  return (

    <div className='my-[150px] max-w-[1280px] mx-auto'>

      {isLoading && <Loading />}
      {error && <Error />}
      {data && data.oprettet && <div>Ny tur er oprettet</div>}

      <h1 className='mb-8 text-center'>Opret ny tur</h1>

      <form onSubmit={handleSubmit} className='flex flex-col border'>

        {/* title */}
        <input name='title' type="text" placeholder='title' required className='p-2 m-2 border' />

        {/* content */}
        <textarea name='content' placeholder='content' required className='p-2 m-2 border' />

        {/* traveltime */}
        <input name='traveltime' type="text" placeholder='traveltime' required className='p-2 m-2 border' />

        {/* destination */}
        <input name='destination' type="text" placeholder='destination' required className='p-2 m-2 border' />

        {/* distance */}
        <input name='distance' type="text" placeholder='distance' required className='p-2 m-2 border' />

        {/* price */}
        <input name='price' type="text" placeholder='price' required className='p-2 m-2 border' />

        {/* spacelaunch */}
        <input name='spacelaunch' type="date" placeholder='spacelaunch' required className='p-2 m-2 border' />

        {/* image1 */}
        <input name='image1' type="file" required className='p-2 m-2 border' />

        {/* image2 */}
        <input name='image2' type="file" required className='p-2 m-2 border' />

        <div className='p-2 m-2 text-center'>
          <button className='text-black ' type='submit'>Opret tur</button>
        </div>

      </form>

    </div>
  )
}

export default CreateTour