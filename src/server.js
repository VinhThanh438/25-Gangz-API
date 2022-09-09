import express from 'express'
import morgan from 'morgan'
import bodyParser, { urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import routes from './routes/index'
import cors from 'cors'

const app = express()
const port = process.env.APP_PORT || 3000

dotenv.config()

app.use(cors())
app.use(cookieParser())
app.use(morgan())
app.use(urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app)

app.listen(port, () => console.log(`server is running on port ${port}`))
