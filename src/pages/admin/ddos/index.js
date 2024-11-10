'use client'

import NavBar from "@/Components/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";

const states = ['Normal', 'Warning', 'Robot']

export default function Page() {

    const [data,setData] = useState({
        Normal: 0, 'Warning': 0, 'Robot': 0
    })


    useEffect(() => {
        const interval = setInterval(() => {
            apiCall();
        }, 1500);
        return () => clearInterval(interval);
    }, [])


    function apiCall() {

        axios.get('/api/ddos')
            .then(res => {
                // data.push(res.data.message)
                setData(res.data)
            })
            .catch(err => {
                alert(err.message)
            })

    }

    return (
        <div>
            <NavBar title={'Admin'} />
            <h1 className="text-3xl font-bold text-center mt-4">DDOS</h1>
            <div className="flex gap-8 justify-center mt-10">
                {states.map(d => <div className="border shadow text-3xl font-semibold border-black p-4">{d} ({data[d]})</div>)}
            </div>
        </div>
    )
}


