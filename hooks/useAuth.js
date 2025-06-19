'use client';
import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../lib/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    useEffect(() => {
        try {
            const savedToken = AuthService.getToken();
            if (savedToken && AuthService.isAuthenticated()) {
                const userData = AuthService.getCurrentUser();
                setToken(savedToken);
                setUser(userData);
            } else {
                AuthService.removeToken(); // Clean up expired token
            }
        } catch (error) {
            console.error('Auth initialization error:', error);
            AuthService.removeToken();
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        AuthService.setToken(authToken);
    };

    const register = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        AuthService.setToken(authToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        AuthService.removeToken();
    };

    const value = {
        user,
        token,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user && AuthService.isAuthenticated(),
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


export  function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}