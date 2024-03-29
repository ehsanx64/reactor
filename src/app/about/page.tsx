import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Navbar from '../Navbar'

export default function About() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex grow place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <h1 className='mt-3 text-3xl font-extrabold'>About</h1>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        </div>
      </main>
    </>
  )
}
