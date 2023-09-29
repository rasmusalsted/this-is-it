import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

// Icons
import { AiOutlineMenu } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus, BiLogoInstagram, BiDotsVerticalRounded } from 'react-icons/bi';

// Assets
import logo from "../Assets/logo.png"
import TureLinks from '../Components/TureLinks';

const Navbar2 = () => {

  let Links = [
    { name: "Hjem", link: "/" },
    { name: "Rumfærgen", link: "/Rumfærgen" },
    { name: "Ture", link: "/Ture", },
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


    <nav className='sticky top-0 z-50'>

      {/* MOBILE */}
      <div className='bg-white'>
        <div className='flex items-center justify-between w-full p-4 max-h-[56px] max-w-[1280px] m-auto'>
          <div className='flex items-start'>
            <AiOutlineMenu onClick={handleNav} className='z-20 text-black cursor-pointer md:hidden' size={25} />
            <Link to="/"><img className='z-30 pt-1 pl-4 md:pl-0' src={logo} alt="Space Venture Logo" /></Link>
          </div>
          <BiDotsVerticalRounded className='md:hidden' size={25} />
          <div
            className={
              nav
                ? 'ease-in duration-300 fixed text-black left-0 top-[56px] w-[75%] h-screen bg-white px-4 py-7 flex-col z-10 md:hidden'
                : 'absolute top-[56px] h-screen left-[-100%] ease-in duration-500 z-10'
            }
          >
            <div className='flex justify-center pb-6 border-b-2 border-[var(--gray)]'>
              <div className='some'><BiLogoFacebook size={25} /></div>
              <div className='some'><BiLogoTwitter size={25} /></div>
              <div className='some'><BiLogoGooglePlus size={25} /></div>
              <div className='some'><BiLogoInstagram size={25} /></div>
            </div>
            <ul className='pt-8'>
              {
                Links.map((link) => (
                  <NavLink key={link.name} onClick={handleNav} to={link.link}>
                    <li>
                      <p className='p-4 hover:text-white hover:bg-[var(--green)]'>{link.name}</p>
                    </li>
                  </NavLink>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className='bg-[var(--blue)] max-h-[56px] hidden md:block'>

        <div className='max-w-[1280px] m-auto flex flex-row justify-between'>


          <ul className='flex flex-row text-white'>
            <NavLink to="/"><li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Hjem</li></NavLink>
            <NavLink to="/Rumfærgen"><li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Rumfærgen</li></NavLink>

            <div className='relative group'>
              <NavLink to="/Ture">
                <li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Ture</li>
              </NavLink>
              <div className='absolute z-50 hidden p-4 text-black bg-white group-hover:block'>
                <TureLinks />
              </div>
            </div>

            <NavLink to="/Galleri"><li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Galleri</li></NavLink>
            <NavLink to="/Sikkerhed"><li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Sikkerhed</li></NavLink>
            <NavLink to="/Kontakt"><li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Kontakt</li></NavLink>
            <NavLink to="/Admin"><li className='p-4 hover:border-t-2 border-[var(--green)] hover:bg-slate-200/20'>Admin</li></NavLink>
          </ul>


          <div className='flex-row hidden p-4 lg:flex'>
            <div className='text-white some'><BiLogoFacebook size={25} /></div>
            <div className='text-white some'><BiLogoTwitter size={25} /></div>
            <div className='text-white some'><BiLogoGooglePlus size={25} /></div>
            <div className='text-white some'><BiLogoInstagram size={25} /></div>
          </div>

        </div>

      </div>

    </nav>
  );


};


export default Navbar2;