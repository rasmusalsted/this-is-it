import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import BackToTopBtn from '../Helpers/BackToTopBtn'


const Layout = () => {

    return (

        <>

            <Navbar />
            <>
                <Outlet />
            </>
            <BackToTopBtn/>
            <Footer />

        </>

    )
}

export default Layout