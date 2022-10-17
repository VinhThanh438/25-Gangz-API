import express from 'express'
import morgan from 'morgan'
import bodyParser, { urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import routes from './routes/index'
import cors from 'cors'
import passport from 'passport'
import flash from 'flash'
import session from 'express-session'
import configViewEngine from './config/viewEngine'

const app = express()
const port = process.env.APP_PORT || 3000

dotenv.config()

app.use(cors())
app.use(cookieParser())
app.use(morgan())
app.use(urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: process.env.COOKIE_SESSION_SECRET }))
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash())

routes(app)
configViewEngine(app)

app.listen(port, () => console.log(`server is running on port ${port}`))
