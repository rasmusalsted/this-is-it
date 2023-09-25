import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Topinfo from './Topinfo'

const Layout = () => {

    return (

        <div>
            {/*           <Topinfo/> */}
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />

        </div>

    )
}

export default Layout