import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import Loading from '../../../Helpers/Loading'
import Error from '../../../Helpers/Error'

// Icons
import { AiFillEdit, AiFillStar, AiFillDelete } from 'react-icons/ai'

//  axios hook
import useAxios from '../../../Helpers/useAxios'
import CreateTour from './CreateTour'



const TureAdmin = () => {

  // GET ture - forud for ret og slet
  const { data, isLoading, error, makeRequest } = useAxios()

  // DELETE tur - for at en tur kan slettes
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useAxios()

  useEffect(() => {

    makeRequest("tours")

  }, [dataDelete]) // lyt efter ændringer i data der slettes

  // håndter slet tur
  const handleDelete = (tureID) => {
    console.log(tureID)


    if (window.confirm("Er du sikker på at du vil slette turen?")) {
      // Kald delete funktion i axios-hook
      makeRequestDelete("tours/admin/" + tureID, null, null, "DELETE")
    }

  }


  return (
    
    <section>

      <div className='py-[150px] max-w-[1280px] px-4  mx-auto flex justify-center'>

        <div className='mx-auto'>
          <h1 className='mb-8 text-center '>Opret/ret/slet</h1>

          {(error || errorDelete) && <Error />}
          {(isLoading || isLoadingDelete) && <Loading />}

          <table className=''>
            <thead>
              <tr>
                <th className='pb-8'><Link to="/admin/CreateTour">Opret tur</Link></th>
                <th></th>
                <th></th>
              </tr>

              <tr className=''>
                <th>Tur</th>
                <th>Ret</th>
                <th>Slet</th>
              </tr>
            </thead>

            <tbody>
              {data && data.map((n) => {
                return (
                  <tr key={n._id}>
                    <td>{n.title}</td>
                    <td>
                      <Link to={"/admin/EditTour/" + n._id}><AiFillEdit color='darkgreen' size={20} /></Link>
                    </td>
                    <td>
                      <AiFillDelete className='cursor-pointer' onClick={() => { handleDelete(n._id) }} color='darkred' size={20} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
      
    </section>
  )

}

export default TureAdmin