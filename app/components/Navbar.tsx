    "use client";
    import React, { useEffect, useState } from "react";
    import Textanimation from "./Textanimation";

    const Navbar = () => {
    const [user, setUser] = useState<null | { userId: string }>(null);

    useEffect(() => {
        const checkAuth = async () => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (!token) {
            setUser(null);
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
            setUser(data.user);
            } else {
            localStorage.removeItem("token");
            setUser(null);
            }
        } catch (error) {
            localStorage.removeItem("token");
            setUser(null);
        }
        };
        checkAuth();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
                <img
                className="h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:brightness-110"
                src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01112536/5_big12.png"
                alt="Logo"
                />
            </div>

            <Textanimation
                sentence="Welcome Gamer"
                manualMode={false}
                blurAmount={10}
                borderColor="purple"
                animationDuration={2}
                pauseBetweenAnimations={1}
            />

            <div className="flex items-center space-x-4">
                {!user && (
                <>
                    <a
                    href="/login"
                    className="group relative px-6 py-2 text-white font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                    >
                    <span className="relative z-10 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                        Login
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="absolute inset-0 border border-purple-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>

                    <a
                    href="/register"
                    className="group relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                    >
                    <span className="relative z-10 font-semibold group-hover:scale-105 transition-transform duration-300">
                        Register
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500"></div>
                    </a>
                </>
                )}

                {user && (
                <>
                    <button
                    onClick={async () => {
                        await fetch("/api/auth/logout", { method: "POST" });
                        localStorage.removeItem("token");
                        location.reload();
                    }}
                    className="group relative px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/25 active:scale-95"
                    >
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                        Logout
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="group p-2 text-white hover:text-purple-300 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
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
                    </button>
                </>
                )}
            </div>
            </div>
        </div>

        {/* Animated border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

        {/* Gaming-style decorative elements */}
        <div className="absolute top-0 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div
            className="absolute top-0 right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
        ></div>
        </nav>
    );
    };

    export default Navbar;
