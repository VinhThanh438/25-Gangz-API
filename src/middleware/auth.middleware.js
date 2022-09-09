// Authentication

import pool from '../config/DB.config'

module.exports = {
    register: async (req, res, next) => {
        const checkUser = req.body.userName
        const query = 'select * from user where userName = ?'
        const check = await pool.execute(query, [checkUser])
        if (check[0].length == 0) next()
        else return res.json({ message: 'this account has already existed' })
    },
}
