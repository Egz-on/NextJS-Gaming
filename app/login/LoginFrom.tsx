'use client'
import React, { useState } from 'react'
import { loginUser } from '@/lib/api'
import {useAuth} from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

import Ballpit from '@/app/components/Ballpit'
import Link from 'next/link'


export default function LoginFrom() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState('')
  const { login } = useAuth();
const router = useRouter();

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = await loginUser({email , password});
      login(data.user , data.token);
      alert("Sucesfully")
      router.push('/Games')
    } catch(error : any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center">
            Welcome Back
          </h1>
          
          {error && (
            <div className="mb-6 text-sm text-red-300 bg-red-500/20 backdrop-blur-sm p-3 rounded-lg border border-red-400/30">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-cyan-200 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all duration-200 border border-white/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-cyan-200 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all duration-200 border border-white/20"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm">
              Don't have an account?{' '}
              <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Ballpit Animation without box */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-full relative">
          <Ballpit
            count={150}
            gravity={0.6}
            friction={0.85}
            wallBounce={0.9}
            followCursor={true}
            colors={[
              '#06b6d4', // Cyan-500
              '#0891b2', // Cyan-600
              '#0e7490', // Cyan-700
              '#8b5cf6', // Purple-500
              '#7c3aed', // Purple-600
              '#6d28d9', // Purple-700
              '#3b82f6', // Blue-500
              '#2563eb', // Blue-600
              '#1d4ed8', // Blue-700
              '#10b981', // Emerald-500
              '#059669', // Emerald-600
              '#047857'  // Emerald-700
            ]}
          />
        </div>
      </div>
    </div>
  );

}

