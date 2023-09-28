import React from 'react'
import AdminBg from "../../../Assets/5.jpeg"

const HomeAdmin = () => {
  return (

    <section>


      <div className='relative w-full h-[400px] overflow-hidden'>
        <img className='top-0 left-0 object-cover w-full h-full animate__heartBeat animate__animated ' src={AdminBg} alt="" />
        <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white'>
          <div className='max-w-[1280px] m-auto p-4'>
            <h1 className='uppercase text-8xl'>velkommen admin</h1>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HomeAdmin