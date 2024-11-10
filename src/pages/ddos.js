'use client'

import NavBar from "@/Components/NavBar"
import axios from "axios"
import { useEffect, useId, useRef, useState } from "react"

export default function Page() {
    return (
        <div>
            <NavBar title={'Deniel Of Service (DDOS)'} />
            <div className="grid mx-10 md:grid-cols-2 mt-10 gap-8">
                <RobotMimic name={'mimic_1'} title={'User 1'} />
                <RobotMimic name={'mimic_2'} title={'User 2'} />
            </div>
        </div>
    )
}


const states = [
    {
        label: 'Normal',
        time: 3000,
        fquency: 20
    },
    {
        label: 'Warning',
        time: 1500,
        fquency: 30
    },
    {
        label: 'Robot',
        time: 1000,
        fquency: 60
    }
]

function RobotMimic({ name, title }) {

    const [data, setData] = useState([]),
        [action, setAction] = useState(states[0]),
        ref = useRef(),
        { time } = action


    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight
        }
    }, [data])

    useEffect(() => {
        const interval = setInterval(() => {
            apiCall();
        }, time);
        return () => clearInterval(interval);
    }, [action])


    function apiCall() {

        axios.post('/api/ddos', { ...action, name })
            .then(res => {
                data.push(res.data.message)
                setData([...data])
            })
            .catch(err => {
                console.log('err: ', err);
            })

    }


    return <div>
        <p>{title}</p>
        <div className="border border-black">
            <div ref={ref} className="h-[50vh] overflow-auto pl-4">
                <div>
                    {data.map((d, i) => {
                        if (d == 'Success') {
                            return <div key={d} className="text-green-600">{i + 1}. {d}</div>
                        }
                        if (d == 'Warning') {
                            return <div key={d} className="text-orange-400">{i + 1}. {d}</div>
                        }
                        return <div key={d} className="text-red-500">{i + 1}. {d}</div>
                    })}
                </div>
            </div>
            <div className="flex justify-between p-8">
                {states.map(d => <Input checked={action.label == d.label} onChange={setAction} key={d} {...d} />)}
            </div>
        </div>
    </div>
}

function Input({ label, fquency, checked, onChange, time }) {

    const id = useId()

    return <div>
        <div className="flex gap-2 items-center">
            <input checked={checked} onChange={() => onChange({ label, time })} id={id} className='size-4' type="checkbox" />
            <label htmlFor={id}>{fquency} request / min</label>
        </div>
    </div>
}