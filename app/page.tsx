import Image from 'next/image'
"use client"
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem('name', "Naveen Kumar");
  }, []);
  const handleRegisterClick = () => {
    router.push('/secondpage');
  };
  return (
    <main className='w-full h-screen grid place-items-center'>
      <h1 className='text-3xl font-bold'>First Page</h1>
      <button
        onClick={handleRegisterClick}
        className='hover:underline underline-offset-2'
      >
        Second Page
      </button>
    </main>
  )
}