import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: process.env.APP_HOST,
    user: 'root',
    password: process.env.APP_PASSWORD,
    database: '25-Gangz-Store',
})

export default pool
