import Image from 'next/image'
"use client"
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    localStorage.setItem('name',"Naveen Kumar")
  },[])
  return (
    <main className='w-full h-screen grid place-items-center'>
      <h1 className='text-3xl font-bold'>First Page</h1>
      <Link href={'/secondpage'} className='hover:underline underline-offset-2'>Second Page</Link>
    </main>
  )
}
