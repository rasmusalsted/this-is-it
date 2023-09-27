
import {useState, createContext} from 'react'

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

    // user state - rummer data hvis en bruger er logget ind
    const [user, setUser] = useState(33) // udfyld for at simulere et login

    let signIn = (email, adgangskode) => {

        if(email === "admin@admin.dk" && adgangskode === "abc123"){

            setUser(email)
        }
    }
    

  return (

    <div>

        <LoginContext.Provider value={{user, signIn}}>
        
        {props.children}

        </LoginContext.Provider>
        
    </div>

  )
}

export default LoginContextProvider