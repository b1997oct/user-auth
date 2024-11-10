import NavBar from '@/Components/NavBar'
import axios from 'axios'
import React, { useState } from 'react'

export default function Page() {

    return (
        <div className='h-screen'>
            <NavBar title={'API Authentication'} />

            <div className='bg-stone-100 h-full pt-10 px-10 gap-10 flex  items-start justify-center'>
                <SendEmail />
                <div className='bg-white w-full rounded-xl p-8 max-w-xl'>
                    <div className='flex justify-end mb-8'>
                        <button className='text-blue-400 border px-2 py-1 hover:bg-blue-50 active:opacity-50'>+ Generate New</button>
                    </div>
                    <div className='grid grid-cols-6'>
                        <textarea readOnly className='w-full col-span-5' />
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SendEmail() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })


    function onChange(e) {
        const { value, id } = e.target
        setData({ ...data, [id]: value })
    }

    function submit() {
        axios.post('/api/user/login', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('err: ', err);
                alert(err.message)
            })
    }



    return (
        <div className='flex flex-col gap-2 w-full rounded-xl bg-white p-8 max-w-xl'>
            <h1 className='text-2xl font-semibold mb-4'>Email API</h1>
            <label htmlFor='to'>To</label>
            <input id='to' onChange={onChange} />
            <label htmlFor='email'>Subject</label>
            <input id='email' onChange={onChange} />
            <label htmlFor='password'>Email Content</label>
            <textarea id='password' onChange={onChange} />
            <label htmlFor='password'>Token</label>
            <textarea id='password' onChange={onChange} />
            <button onClick={submit} className='border rounded-full mt-6 active:scale-95 border-blue-500 text-blue-500 opacity-60 hover:opacity-100 py-1'>SEND</button>
        </div>
    )

}