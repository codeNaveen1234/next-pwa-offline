import Image from 'next/image'
"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SecondPage() {
  const router = useRouter();
  const [myName,setName]=useState()
  useEffect(()=>{
    const data:any=localStorage.getItem("name")
    setName(()=>data)
  },[])
  const handleRegisterClick = () => {
    router.push('/home');
  };
  return (
    <main className='w-full h-screen grid place-items-center'>
      <h1 className='text-3xl font-bold'>Second Page</h1>
      <h1 className='text-3xl font-bold'>{myName}</h1>
      <button
        onClick={handleRegisterClick}
        className='hover:underline underline-offset-2'
      >
        Second Page
      </button>
    </main>
  )
}
