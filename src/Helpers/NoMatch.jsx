import React from 'react'
import { Link } from "react-router-dom";
import AdminBg from "../Assets/5.jpeg"

const NoMatch = () => {


  return (


    <section>


      <div className='relative w-full h-[400px] overflow-hidden text-center'>
        <img className='top-0 left-0 object-cover w-full h-full animate__heartBeat animate__animated ' src={AdminBg} alt="" />
        <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>
          <div className='max-w-[1280px] m-auto p-4'>
            <h1 className='mb-4 text-6xl'>Beklager</h1>
            <p className='mb-6 text-xl'>Siden findes ikke</p>
            <Link to="/"><p className='text-3xl'>Tilbage til forsiden</p></Link>
          </div>
        </div>
      </div>

    </section>


  )

}

export default NoMatch



