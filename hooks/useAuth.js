'user client';
import { createContext } from "react";
import { verifyToken } from "../lib/api";
import { use, useContext, useEffect, useState } from "react";
import { useFormState } from "react-dom";


const AuthContext = createContext();

export function AuthProvider({children}) {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [token , setToken] = useState(null)

useEffect(() => {
    const savedToken = localStorage.getItem('auth-token')
    if(savedToken) {
        verifyToken(savedToken)
        .then((data)=> {
            setToken(savedToken);
            setUser(data.user)
        })
        .catch(()=> localStorage.removeItem('auth-token'))
        .finally(setLoading(false))
    } else {setLoading(false)}
},[])

const login = (userData , authToken) => {

    setUser(userData)
    setToken(authToken)
    localStorage.setItem('auth-token' , authToken)
}
    const register = (userData, authToken) => {
        setUser(userData)
        setToken(authToken)
        localStorage.setItem('auth-token', authToken)
    }

const logout = (userData , authToken) => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('auth-token')
}

    const value = {
        user,
        token,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user,
    }

return(
<AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>
);
}

export function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new error('useAuth must be used within an AuthProvider ')
    }
    return context;
}2