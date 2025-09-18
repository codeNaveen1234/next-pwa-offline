import Image from 'next/image'
"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SecondPage() {
  const [myName,setName]=useState()
  useEffect(()=>{
    const data:any=localStorage.getItem("name")
    setName(()=>data)
  },[])
  return (
    <main className='w-full h-screen grid place-items-center'>
    <h1 className='text-3xl font-bold'>Second Page</h1>
    <h1 className='text-3xl font-bold'>{myName}</h1>
    <Link href={'/'} className='hover:underline underline-offset-2 py-2'>Home Page</Link>
  </main>
  )
}
