import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

export default function Dashboard() {
    return (
        <>
            <Navbar />

            <div className="flex min-h-screen flex-nowrap">
                <aside className="flex grow-0 w-72 bg-blue p-8">
                    <Sidebar />
                </aside>

                <main className="flex flex-col grow justify-between p-8">
                    <h1 className='mt-3 text-3xl font-extrabold'>Dashboard</h1>
                </main>
            </div>
        </>
    )
}
