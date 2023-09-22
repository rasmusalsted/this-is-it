import { useEffect } from 'react'
import useAxios from '../../../Helpers/useAxios'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'


const CreateTestimonial = () => {

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
    
    makeRequest("testimonial/admin", null, null, "POST", fd)
    
    console.log("formular afsendt")

  }

  return (

    <div className='my-[150px] max-w-[1280px] mx-auto'>

      {isLoading && <Loading/>}
      {error && <Error/>}
      {data && data.oprettet && <div>Testimonial er oprettet</div>}

      <h1 className='mb-8 text-center'>Opret ny Testimonial</h1>

      <form onSubmit={handleSubmit} className='flex flex-col border'>

        {/* title */}
        <input name='title' type="text" placeholder=' Testimonial overskrift' required className='p-2 m-2 border' />
        
        <input name='name' type="text" placeholder='Personens navn' required className='p-2 m-2 border' />

        {/* content */}
        <textarea name='review' placeholder='Testimonial tekst' required className='p-2 m-2 border' />

        {/* image */}
        <input name='image' type="file" required className='p-2 m-2 border' />

        <div className='p-2 m-2 text-center'>
          <button className='text-black ' type='submit'>Opret Testimonial</button>
        </div>

      </form>

    </div>
  )
}

export default CreateTestimonial