'use client'
import React, { useState } from 'react'
import { loginUser } from '@/lib/api'
import { useAuth } from '@/hooks/useAuth'



export default function LoginFrom() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState('')
  const { login } = useAuth();


  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = await loginUser({email , password});
      login(data.user , data.token);
      alert("Sucesfully")
    } catch(error : any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>

    
    </>
  )
}

