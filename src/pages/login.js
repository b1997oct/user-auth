'use client'

import NavBar from "@/Components/NavBar"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Page() {

    const [signup, setSignup] = useState(true),
    r = useRouter()


    return (
        <div>
                  <NavBar title={"Project 29"}/>

            <div class="flex bg-stone-50 justify-center h-[90vh] items-center">
                <div className="flex flex-col bg-white gap-2 w-full max-w-xl rounded-xl p-4 md:p-10">
                    <Login />
                    <div className='flex gap-2 mt-4'>
                        {signup ? 'Already have an Account' : "Don't Have An Account"}
                        <button onClick={() => r.push('/signup')} className='active:scale-95 border-blue-500 text-blue-500 opacity-60 hover:opacity-100'>
                            SIGNUP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Login() {

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
        <>
            <h1 className='text-2xl font-semibold mb-4'>Login</h1>
            <label htmlFor='email'>Email</label>
            <input id='email' onChange={onChange} />
            <label htmlFor='password'>Password</label>
            <input id='password' onChange={onChange} />
            <button onClick={submit} className='border rounded-full mt-6 active:scale-95 border-blue-500 text-blue-500 opacity-60 hover:opacity-100 py-1'>SUBMIT</button>
        </>
    )
}

