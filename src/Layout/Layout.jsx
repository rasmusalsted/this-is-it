import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import BackToTopBtn from '../Helpers/BackToTopBtn'


const Layout = () => {

    return (

        <div>

            <Navbar />

            <main>
                <Outlet />
            </main>
            <BackToTopBtn/>
            <Footer />

        </div>

    )
}

export default Layout