import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children })=>{

    const [ session, setSession ] = useState('')

    useEffect(()=>{
        let localsession = localStorage.getItem("session")
        setSession(localsession)

    }, [])



    return (
        <AuthContext.Provider value={{ session }}>
            { children }
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}