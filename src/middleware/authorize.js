import jwt, { JsonWebTokenError } from 'jsonwebtoken'

const authorize = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token
        if (token) {
            const accessToken = token.split(' ')[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) return res.status(403).json({ error: err })
                req.user = user
                next()
            })
        } else {
            return res.status(401).json({ message: 'you are not authenticated!' })
        }
    },

    userAndAdminAuthorize: (req, res, next) => {
        authorize.verifyToken(req, res, () => {
            if (req.user.userId == req.params.id || req.user.isAdmin == 1) {
                next()
            } else {
                res.status(403).json({ message: 'you are not user or admin' })
            }
        })
    },
}

module.exports = authorize
