import React, { useContext } from 'react'
import NavbarAdmin from './NavbarAdmin'
import FooterAdmin from './FooterAdmin.jsx'
import { Navigate, Outlet } from 'react-router-dom'
import Topinfo from '../Topinfo'


// Få adgang til LoginContext
import { LoginContext } from '../../Context/LoginContext'


const LayoutAdmin = () => {

  const {user} = useContext(LoginContext)

  // Afvis hvis der ikke er en user
  if (!user) {
    return <Navigate to="/login" replace> </Navigate>
  }

  return (
    
    <div>
      <Topinfo/>
      <NavbarAdmin />
      
      <main>
        <Outlet />
      </main>

      <FooterAdmin />

    </div>
  )
}

export default LayoutAdmin