import { useEffect } from 'react'
import useAxios from '../../../Helpers/useAxios'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'


const CreateNews = () => {

  // POST nyhed - opret en nyhed
  const { data, isLoading, error, makeRequest } = useAxios()

   useEffect(() => {
    if(data && data.oprettet){
      document.forms[0].reset();
    }
  }) 

  const handleSubmit = e => {

    e.preventDefault(); // husk for at undgå reload ved submit

    // lav et formdataobjekt af indholdet fra formularen (e.target)
    let fd = new FormData(e.target)
    
    makeRequest("news/admin", null, null, "POST", fd)
    
    console.log("formular afsendt")

  }

  return (

    <div className='my-[150px] max-w-[1280px] mx-auto'>

      {isLoading && <Loading/>}
      {error && <Error/>}
      {data && data.oprettet && <div>Nyhed er oprettet</div>}

      <h1 className='mb-8 text-center'>Opret ny nyhed</h1>

      <form onSubmit={handleSubmit} className='flex flex-col border'>

        {/* title */}
        <input name='title' type="text" placeholder='Skriv en nyhedstitel' required className='p-2 m-2 border' />

        {/* content */}
        <textarea name='content' placeholder='Skriv en nyhed' required className='p-2 m-2 border' />

        {/* image */}
        <input name='image' type="file" required className='p-2 m-2 border' />

        <div className='p-2 m-2 text-center'>
          <button className='text-black ' type='submit'>Opret nyhed</button>
        </div>

      </form>

    </div>
  )
}

export default CreateNews