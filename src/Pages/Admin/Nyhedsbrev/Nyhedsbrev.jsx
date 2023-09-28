import React from 'react'
import { useEffect } from 'react';



//Components
import Error from '../../../Helpers/Error';
import Loading from '../../../Helpers/Loading';
import useAxios from '../../../Helpers/useAxios';

// Icons
import { AiFillDelete } from 'react-icons/ai'


const Nyhedsbrev = () => {

    // GET nyhedsbrev - forud for ret og slet
    const { data, isLoading, error, makeRequest } = useAxios()

    // DELETE nyhedsbrev - for at en tur kan slettes
    const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useAxios()
  
    useEffect(() => {
  
      makeRequest("newssubscription/admin")
  
    }, [dataDelete]) // lyt efter ændringer i data der slettes
  
    // håndter slet tur
    const handleDelete = (brevID) => {
      console.log(brevID)
  
  
      if (window.confirm("Er du sikker på at du vil slette tilmeldingen?")) {
        // Kald delete funktion i axios-hook
        makeRequestDelete("newssubscription/admin/" + brevID, null, null, "DELETE")
      }
  
    }
  

  return (

    <section className='my-[150px] px-4 max-w-[1280px] m-auto'>



      <div>

        {error && <Error />}
        {isLoading && <Loading />}

        {
          data &&

          <div className=''>
            
            <h1 className='text-center'> Slet nyhedsbrev tilmeldte</h1>

            {data.map((item) => (


              <div key={item._id} className='p-4 my-8 border'>
                
                <div className=''>

                  <p>Email: {item.email}</p>
                  <AiFillDelete className='cursor-pointer' onClick={() => { handleDelete(item._id) }} color='darkred' size={20} />
                   
                </div>

              </div>


            ))}

          </div>

        }


      </div>




    </section>

  )
}

export default Nyhedsbrev