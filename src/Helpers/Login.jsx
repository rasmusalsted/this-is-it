import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { Navigate } from 'react-router-dom'

const Login = () => {

    const { signIn, user } = useContext(LoginContext) //signIn-metoden i contextfilen

    if (user) {
        return <Navigate to="/admin" replace> </Navigate>
    }


    const handleSubmit = (e) => {

        e.preventDefault()
        signIn(e.target.email.value, e.target.password.value) // send inputfelternes value til signIn-funktionens context
    }
    return (
        <div className='py-[150px] max-w-[1280px] mx-auto flex justify-center'>

            <div>

                <form className='flex flex-col w-[300px] border border-black p-2' onSubmit={handleSubmit}>
                <h3 className='text-center'>LOGIN</h3>


                    <input className='p-2 mb-2 border border-black ' placeholder='Email' type="email" name="email" required />



                    <input className='p-2 mb-2 border border-black ' placeholder='Password' type="password" name="password" required />

                    <button className='text-black p2' type='submit'>Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login