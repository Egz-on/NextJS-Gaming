        'use client'
        import React, { useState } from 'react'
        import {registerUser} from '@/lib/api'
        import { useAuth } from '@/hooks/useAuth'
        import { useRouter } from 'next/navigation'


        function RegisterForm() {
            const [username , setUsername] = useState('')
            const [email , setEmail] = useState('')
            const [password , setPassword] = useState('')
            const [loading , setLoading] = useState(false)
            const [error , setError] = useState('')
            const {login} = useAuth();
            const router = useRouter()

            const handleSubmit = async(e: React.FormEvent) => {
                e.preventDefault()
                    setError('')
                    setLoading(true)
                try {
                    const data = await registerUser({username , email , password});
                    login(data.user , data.token)
                    alert("Account created successfully!");
                    router.push('/Home')
                } catch(error : any) {
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">Register</h1>
            
            {error && (
            <div className="mb-4 text-sm text-red-400 bg-red-800 p-2 rounded">
                {error}
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm mb-1">Username</label>
                <input
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                />
            </div>

            <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                />
            </div>

            <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition duration-200"
                disabled={loading}
            >
                {loading ? 'Registering...' : 'Registered'}
            </button>
            </form>
        </div>
        </div>
    )
        }

        export default RegisterForm