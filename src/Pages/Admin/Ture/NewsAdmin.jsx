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
import CreateNews from './CreateTour'



const NewsAdmin = () => {

  // GET nyheder - forud for ret og slet
  const { data, isLoading, error, makeRequest } = useAxios()

  // DELETE nyhed - for at en nyhed kan slettes
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useAxios()

  useEffect(() => {

    makeRequest("tours")

  }, [dataDelete]) // lyt efter ændringer i data der slettes

  // håndter slet nyhed
  const handleDelete = (newsID) => {
    console.log(newsID)


    if (window.confirm("Er du sikker på at du vil slette nyheden?")) {
      // Kald delete funktion i axios-hook
      makeRequestDelete("tours/admin/" + newsID, null, null, "DELETE")
    }

  }





  return (
    <div className='my-[150px] max-w-[1280px] px-4  mx-auto flex justify-center'>

      <div className='mx-auto'>
        <h1 className='mb-8 text-center '>Opret/ret/slet</h1>

        {(error || errorDelete) && <Error />}
        {(isLoading || isLoadingDelete) && <Loading />}

        <table className=''>
          <thead>
            <tr>
              <th className='pb-8'><Link to="/admin/createnews">Opret tur</Link></th>
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
                    <Link to={"/admin/EditNews/" + n._id}><AiFillEdit color='darkgreen' size={20} /></Link>
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
  )

}

export default NewsAdmin