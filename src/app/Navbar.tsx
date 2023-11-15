'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
    url: string;
    title: string;
}

const mainMenu: MenuItem[]  = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
]

export default function Navbar() {
    const pathname = usePathname()
    

    return (
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    {mainMenu.map((i: MenuItem) => (
                        <Link key={`menu-${i.url}`} href={i.url} className={"text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900" + (pathname === i.url ? ' font-black' : '')} aria-current="page">{i.title}</Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }