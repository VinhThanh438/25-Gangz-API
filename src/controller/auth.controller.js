import pool from '../config/DB.config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateToken = {
    accessToken: (data) => {
        return jwt.sign(
            {
                userID: data.userId,
                userName: data.userName,
                isAdmin: data.isAdmin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: '30s' }
        )
    },

    refreshToken: (data) => {
        return jwt.sign(
            {
                userID: data.userId,
                userName: data.userName,
                isAdmin: data.isAdmin,
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: '365d' }
        )
    },
}

const userController = {
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
                const accessToken = generateToken.accessToken(data)
                const refreshToken = generateToken.refreshToken(data)
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
            const userID = req.params.id
            await pool.execute(query, [userID])
            return res.status(203).json({ message: 'user has deleted' })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },
}

module.exports = userController
