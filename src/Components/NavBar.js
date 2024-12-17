import Link from 'next/link'
import React from 'react'

export default function NavBar({ title }) {
    return (
        <div className="flex gap-4 shadow p-6">
            <div className="flex-1">
                <h3 className="font-bold text-xl">{title}</h3>
            </div>
            <Link href={'/account'}>Signup</Link>
            <Link href={'/account'}>Login</Link>
        </div>
    )
}
