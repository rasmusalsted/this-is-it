import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar2 = () => {

  let Links = [
    { name: "Admin home", link: "/Admin" },
    { name: "Nyheder", link: "/Admin/NewsAdmin" },
    { name: "Ret om os", link: "/Admin/AboutAdmin" },
    { name: "Opret testimonial", link: "/Admin/CreateTestimonial" },
  ];


  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (


    <div className='relative z-50 w-full h-full'>

      {/* DESKTOP */}
      <div className='absolute top-0 left-[5%] w-[90%] '>

        <div className='mt-[-3rem] shadow-2xl z-50 relative border rounded-md max-w-[1240px] md:mx-auto p-4 bg-white'>

          <div className='flex justify-between'>

            <ul className='hidden md:flex lg:w-[700px] md:justify-between'>
              {
                Links.map((link) => (
                  <NavLink to={link.link}>
                    <li key={link.name} className='p-5 font-semibold uppercase hover:text-[var(--safety-orange-blaze-orange)]'>
                      <p>{link.name}</p>
                    </li>
                  </NavLink>
                ))
              }
            </ul>

            {/* Søgefeldt */}
            <div className='w-[300px] text-xl hidden md:flex'>
              <input
                type='text'
                placeholder='Søg'
                className='w-full p-4 border rounded outline-none'
              />
            </div>
          </div>

          {/* Burgermenu */}
          <div className='flex items-center justify-between'>
            <div onClick={handleNav} className='z-20 block md:hidden'>
              {<AiOutlineMenu size={50} className='cursor-pointer p-3 bg-[var(--onyx)] text-white' />}
            </div>

            {/* MOBILE */}
            <div className='w-[300px] text-xl md:hidden'>
              {/* Søgefeldt */}
              <input
                type='text'
                placeholder='Søg'
                className='w-full p-4 border rounded outline-none'
              />
            </div>
          </div>
        </div>

        <ul onClick={handleNav} className={nav ? ' px-4 z-10 flex flex-col ease-in-out duration-500 bg-white text-white' : 'hidden ease-in-out duration-500'}>
          {
            Links.map((link) => (
              <NavLink to={link.link}>
                <li key={link.name} className='bg-[var(--onyx)] p-4 hover:bg-[var(--safety-orange-blaze-orange)] font-semibold text-white uppercase border'>
                  <p>{link.name}</p>
                </li>
              </NavLink>
            ))
          }
        </ul>

      </div>

    </div>
  );


};


export default Navbar2;