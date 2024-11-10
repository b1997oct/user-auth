'use client'

import React, { useState } from 'react'

export default function UserTable() {

    const [loading, setLoading] = useState(false),
        [error, setError] = useState(''),
        [auto, setAuto] = useState(true)

    function refresh() {
        setLoading(true)
        setTimeout(() => setLoading(false), 4000)
    }

    return (
        <div>
            <div className='p-8'>
                <div className='flex justify-end gap-4'>
                    <div className='flex gap-2 items-center'>
                        { auto && <div className='size-2 animate-ping bg-red-600 rounded-full' />}
                        <input checked={auto}  onChange={e=>setAuto(e.target.checked)}id='auto' type='checkbox' className='size-4' />
                        <label htmlFor='auto'>Auto</label>
                    </div>
                    <button disabled={auto} onClick={refresh} className='border rounded-md py-1 px-2 flex gap-1'>Resfresh</button>
                </div>
                <table className='w-full mt-4'>
                    <tbody>
                        <tr className='th-row'>
                            <td>SL No.</td>
                            <td>User Name</td>
                            <td>Email</td>
                            <td>Password</td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Kiram</td>
                            <td>Kiram@gmail.com</td>
                            <td>$234jkfjjh8ndu8</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {loading &&
                <div className='flex justify-center items-center fixed top-0 w-full bg-white/70 h-screen z-50'>
                    <div>Loading...</div>
                </div>}
        </div>
    )
}
