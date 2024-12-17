import Link from 'next/link'
import React from 'react'

export default function NavBar({ title }) {
    return (
        <div className="flex gap-8 shadow py-4 px-6 items-center">
            <div className="flex-1">
                <a href='/'>
                <h3 className="font-bold text-xl">{title}</h3>
                </a>
            </div>
            <Link href={'/login'}>Login</Link>
            <Link className='bg-black rounded-lg text-white px-4 py-2' href={'/signup'}>Signup</Link>
        </div>
    )
}
