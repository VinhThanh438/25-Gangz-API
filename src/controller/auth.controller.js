import pool from '../config/DB.config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let refreshTokens = []

const userController = {
    generateAccessToken: (data) => {
        return jwt.sign(
            {
                userId: data.userId,
                userName: data.userName,
                isAdmin: data.isAdmin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: '25s' }
        )
    },

    generateRefreshToken: (data) => {
        return jwt.sign(
            {
                userId: data.userId,
                userName: data.userName,
                isAdmin: data.isAdmin,
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: '365d' }
        )
    },

    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.userPassword, salt)
            const query = 'insert into user (`userName`, `userPassword`) values (?, ?)'
            pool.execute(query, [req.body.userName, hashed])
            return res.status(201).json({
                message: 'user has created',
            })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    logIn: async (req, res) => {
        try {
            const query =
                'select userId, userName, userPassword, isAdmin from user where userName = ?'
            const { userName, userPassword } = req.body
            const [result] = await pool.execute(query, [userName])
            const data = result[0]
            if (!data) return res.status(404).json({ message: 'wrong user name' })
            const validPassword = await bcrypt.compare(userPassword, data.userPassword)
            if (!validPassword)
                return res.status(404).json({ message: 'Invalid Password' })
            if (data && validPassword) {
                const accessToken = userController.generateAccessToken(data)
                const refreshToken = userController.generateRefreshToken(data)
                refreshTokens.push(refreshToken)
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: 'strict',
                })
                return res.status(200).json({
                    message: 'Logged in successfully',
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                })
            }
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const query = 'delete from user where `user`.`userId` = ?'
            const userId = req.params.id
            await pool.execute(query, [userId])
            return res.status(203).json({ message: 'user has deleted' })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    requestRefreshToken: (req, res, next) => {
        const refreshToken = req.cookies.refreshToken

        // lost user id and password in refresh token

        if (!refreshToken)
            return res.status(401).json({ message: 'you are not authenticated' })
        if (!refreshTokens.includes(refreshToken))
            return res.status(403).json({ message: 'refresh token is not valid' })
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, data) => {
            if (err) return res.status(403).json({ error: err })
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)

            //create new acess token and refresh token
            const newAccessToken = userController.generateAccessToken(data)
            const newRefreshToken = userController.generateRefreshToken(data)
            refreshTokens.push(newRefreshToken)
            res.cookie('newRefreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: 'strict',
            })
            return res.status(200).json({
                newAccessToken: newAccessToken,
            })
        })
    },
}

module.exports = userController
