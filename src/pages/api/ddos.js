import { cookies } from "next/headers"

const monitor = { Normal: 0, 'Warning': 0, 'Robot': 0 }

export default async function handler(req, res) {


    try {
        if (req.method == "GET") {
            return res.json(monitor)
        }
        
        const { name, label } = req.body
       
        if (label == 'Normal') {
            return res.status(200).json({ message: 'Success' })
        } else if (label == 'Warning') {
            return res.status(200).json({ message: 'Warning' })
        }
        return res.status(200).json({ message: 'Request Faild' })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}