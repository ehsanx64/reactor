'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
    url: string;
    title: string;
}

const mainMenu: MenuItem[] = [
    {
        url: "/dashboard",
        title: "Dashboard"
    },
    {
        url: "/dashboard/posts",
        title: "Posts"
    },
]

export default function Sidebar() {
    const pathname = usePathname()


    return (
        <div className="">
            <ul className="w-full">
                {mainMenu.map((i: MenuItem) => (
                    <li key={`menu-${i.url}`} >
                        <Link key={`menu-${i.url}`} href={i.url} className={"text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900" + (pathname === i.url ? ' font-black' : '')} aria-current="page">{i.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}