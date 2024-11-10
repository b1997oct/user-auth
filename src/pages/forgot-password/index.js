import axios from 'axios'
import React, { useState } from 'react'

export default function Page() {
  return (
    <div className='bg-stone-100 flex justify-center h-screen items-center'>
      <ForgetPass />
    </div>
  )
}



function ForgetPass() {

  const [data, setData] = useState({
    cp: '',
    password: ''
  }),
    [email, setEmail] = useState()

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
    <div className='flex flex-col gap-2 w-full max-w-xl bg-white p-8'>
      <h1 className='text-2xl font-semibold'>Forget Password</h1>
      <p>{email || 'example@mff.in'}</p>
      <br />
      <label htmlFor='password'>New Password</label>
      <input id='password' onChange={onChange} />
      <label htmlFor='cp'>Confirm Password</label>
      <input id='cp' onChange={onChange} />
      <button onClick={submit} className='border rounded-full mt-6 active:scale-95 border-blue-500 text-blue-500 opacity-60 hover:opacity-100 py-1'>SUBMIT</button>
    </div>
  )
}
