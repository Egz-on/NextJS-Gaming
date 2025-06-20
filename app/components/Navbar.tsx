        "use client";
        import React, { useEffect } from "react";
        import { useAuth } from "@/hooks/useAuth";
        import { useRouter } from "next/navigation";
        import Link from "next/link";
        import {AuthService} from '@/lib/auth'


        const Navbar = () => {
        const { user, login, logout, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            const checkAuth = async () => {
            const token = AuthService.getToken();
            if (!token) {
                return;
            }

            try {
                const res = await fetch("/api/auth/verify", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                });

                if (res.ok) {
                const data = await res.json();
                login(data.user , token);
                } 
            } catch (error) {
                // localStorage.removeItem("auth-token");
                logout()
                
            }
            };
            if(!loading && !user) {
                checkAuth();
            }
        }, [user, loading, login, logout]);
        if(loading) {
            return <div>Loading...</div>
        }

    return (
    <div className="container mx-auto py-4">
        <nav className="bg-white/10 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between border border-white/20">
        
        <div>
            <Link href="/Games" className="text-xl font-bold text-white hover:text-purple-300 transition-colors px-4">
            MyApp
            </Link>
        </div>

        
        <div className="flex items-center space-x-4">
            {!user ? (
            <>
                <Link href="/login" className="text-white hover:text-purple-300 transition-colors px-3">
                Login
                </Link>
                <Link href="/register" className="text-white hover:text-purple-300 transition-colors px-3">
                Register
                </Link>
            </>
            ) : (
            <>
                <button onClick={logout} className="text-white hover:text-red-300 transition-colors px-3 cursor-pointer">
                Logout
                </button>
                <Link
                href="/profile"
                className="group p-2 text-white hover:text-purple-300 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                >
                <svg
                    className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                </Link>
            </>
            )}
        </div>
        </nav>
    </div>
    );

        };

        export default Navbar;
