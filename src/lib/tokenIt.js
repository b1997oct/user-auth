import { sign, verify as jwtVerify } from "jsonwebtoken"

const pt = '123ohgt',
    algorithm = 'HS512'


const tokenIt = {
    create(payload, { expiresIn }) {
        return sign(payload, pt, { algorithm, expiresIn })
    },
    verify(tok) {
        return jwtVerify(tok, pt, { algorithm })
    }
}

export default tokenIt