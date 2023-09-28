import React from 'react'
import { useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";


//Components
import Error from '../../../Helpers/Error';
import Loading from '../../../Helpers/Loading';
import useAxios from '../../../Helpers/useAxios';


const Henvendelser = () => {

  // GET data
  const { data, isLoading, error, makeRequest } = useAxios()

  useEffect(() => {

    makeRequest("contact/admin")

  }, []) // lyt efter ændringer i data der slettes

        // Function der sorter turene så næste tur afgang er først
        const sortDataByLatestMsg = (data) => {
          if (data && data.length > 0) {
              return data.slice().sort((a, b) => new Date(b.received) - new Date(a.received));
          }
          // returner orginal data hvis det ikke er muligt
          return data;
      };
  
      // useMemo til at sorter data array når det er klar
      const sortedData = useMemo(() => sortDataByLatestMsg(data), [data]);








  return (

    <section className='my-[150px] px-4 max-w-[1280px] m-auto'>



      <div>

        {error && <Error />}
        {isLoading && <Loading />}

        {
          sortedData &&

          <div className=''>
            
            <h1 className='text-center'>Henvendelser fra kontaktformularen</h1>

            {sortedData.map((item) => (


              <div key={item._id} className='p-4 my-8 border'>
                
                <div className='mb-4'>
                  <p className=''>henveldelse modtaget: {item.received}</p>
                  <p className='mb-2'>henveldelse status: {item.read ? <span className='font-bold text-[var(--green)]'>Læst</span> : <span className='font-bold text-red-800'>IKKE læst</span> }</p>
                  <p>Navn: {item.name}</p>
                  <p>Email: {item.email}</p>
                  <p>Tlf: {item.phone}</p> 
                </div>
                <p>Besked: {item.message}</p>
              </div>


            ))}

          </div>

        }


      </div>




    </section>

  )
}

export default Henvendelser