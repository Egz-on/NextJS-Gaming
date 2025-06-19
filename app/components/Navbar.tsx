    "use client";
    import React, { useEffect } from "react";
    import { useAuth } from "@/hooks/useAuth";
    import { useRouter } from "next/navigation";
    import Link from "next/link";
    import { Menu, X } from "lucide-react";

    const Navbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    useEffect(() => {
        const checkAuth = async () => {
        const token = localStorage.getItem("auth-token");
        if (!token) {
            user(null);
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
            user(data.user);
            } else {
            localStorage.removeItem("auth-token");
            user(null);
            }
        } catch (error) {
            localStorage.removeItem("auth-token");
            user(null);
        }
        };
        checkAuth();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-purple-400">
            GameZone
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 items-center">
            <Link href="/" className="hover:text-purple-400">Home</Link>
            <Link href="/store" className="hover:text-purple-400">Store</Link>
            <Link href="/about" className="hover:text-purple-400">About</Link>

            {!user && (
                <>
                <Link href="/login" className="text-sm px-4 py-1 rounded hover:bg-purple-600/30 border border-purple-500/30">
                    Login
                </Link>
                <Link href="/register" className="text-sm px-4 py-1 rounded bg-purple-600 hover:bg-purple-700">
                    Register
                </Link>
                </>
            )}

            {user && (
                <>
                <button
                    onClick={() => {
                    logout();
                    router.push("/");
                    }}
                    className="text-sm px-4 py-1 rounded bg-red-600 hover:bg-red-700"
                >
                    Logout
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

            {/* Mobile Menu Toggle */}
            <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
            >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
            <div className="md:hidden px-4 pb-4 space-y-3 bg-zinc-900 border-t border-zinc-700">
            <Link href="/home" className="block hover:text-purple-400">Home</Link>
            <Link href="/store" className="block hover:text-purple-400">Store</Link>
            <Link href="/about" className="block hover:text-purple-400">About</Link>

            {!user && (
                <>
                <Link href="/login" className="block text-purple-400">Login</Link>
                <Link href="/register" className="block text-purple-400">Register</Link>
                </>
            )}

            {user && (
                <>
                <button
                    onClick={() => {
                    logout();
                    router.push("/");
                    }}
                    className="block text-red-400"
                >
                    Logout
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
        )}
        </nav>
    );
    };

    export default Navbar;
