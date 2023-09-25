import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

// Icons
import { AiOutlineMenu } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus, BiLogoInstagram, BiDotsVerticalRounded } from 'react-icons/bi';

// Assets
import logo from "../Assets/logo.png"

const Navbar2 = () => {

  let Links = [
    { name: "Hjem", link: "/" },
    { name: "Rumfærgen", link: "/Rumfærgen" },
    { name: "Ture", link: "/Ture" },
    { name: "Galleri", link: "/Galleri" },
    { name: "Sikkerhed", link: "/Sikkerhed" },
    { name: "Kontakt", link: "/Kontakt" },
    { name: "Admin", link: "/Admin" },
  ];




  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };



  return (


    <nav>

      {/* MOBILE */}
      <div className='flex items-center justify-between w-full p-4 max-h-[56px] max-w-[1280px] m-auto md:hidden '>
        <div className='flex items-start '>
          <AiOutlineMenu onClick={handleNav} className='z-20 text-black cursor-pointer md:hidden' size={25} />
          <Link to="/"><img className='z-30 pt-1 pl-4 md:pl-0' src={logo} alt="Space Venture Logo" /></Link>
        </div>
        <BiDotsVerticalRounded className='md:hidden' size={25} />
        <div
          className={
            nav
              ? 'ease-in duration-300 fixed text-black left-0 top-[56px] w-[75%] h-screen bg-slate-200 px-4 py-7 flex-col z-10'
              : 'absolute top-[56px] h-screen left-[-100%] ease-in duration-500 z-10'
          }
        >
          <div className='flex justify-center pb-6 border-b-2 border-[var(--gray)]'>
            <a className='px-2' href=""><BiLogoFacebook size={25} /></a>
            <a className='px-2' href=""><BiLogoTwitter size={25} /></a>
            <a className='px-2' href=""><BiLogoGooglePlus size={25} /></a>
            <a className='px-2' href=""><BiLogoInstagram size={25} /></a>
          </div>
          <ul className='pt-8'>
            {
              Links.map((link) => (
                <NavLink to={link.link}>
                  <li key={link.name}>
                    <p className='p-4 hover:text-white hover:bg-[var(--green)]'>{link.name}</p>
                  </li>
                </NavLink>
              ))
            }
          </ul>
        </div>
      </div>

      {/* DESKTOP */}
      <div className='bg-[var(--blue)] max-h-[56px] hidden md:block'>

        <div className='max-w-[1280px] m-auto flex flex-row justify-between'>


          <ul className='flex flex-row text-white'>
            {
              Links.map((link) => (
                <NavLink to={link.link}>
                  <li key={link.name}>
                    <p className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>{link.name}</p>
                  </li>
                </NavLink>
              ))
            }
          </ul>


          <div className='flex-row hidden p-4 lg:flex'>
            <a className='px-2 text-white' href=""><BiLogoFacebook size={25} /></a>
            <a className='px-2 text-white' href=""><BiLogoTwitter size={25} /></a>
            <a className='px-2 text-white' href=""><BiLogoGooglePlus size={25} /></a>
            <a className='px-2 text-white' href=""><BiLogoInstagram size={25} /></a>
          </div>

        </div>

      </div>

    </nav>
  );


};


export default Navbar2;