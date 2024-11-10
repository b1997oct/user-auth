
export default function access(req, res) {
    try {
        let { token , admin } = req.body


        if (admin) {
            const t = 'tru'
            return res.json({ token })
        }

        return res.json({ token })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
