import passport from 'passport'
import passportLocal from 'passport-local'
import pool from '../config/DB.config'
import bcrypt from 'bcrypt'
import FacebookStrategy from 'passport-facebook'

let LocalStrategy = passportLocal.Strategy

passport.use(
    new LocalStrategy(async (username, password, done) => {
        const query = 'select * from user where userName = ?'
        const [data] = await pool.execute(query, [username])
        const dataUser = data[0]
        if (!dataUser) return done('cannot connect to database!')
        await bcrypt.compare(password, dataUser.userPassword, (err) => {
            if (err) return done('invalid password')
        })
        return done(null, dataUser)
    })
)

passport.serializeUser((user, done) => {
    done(null, user) // save data to session and req.user will has data
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
        },
        (accessToken, refreshToken, profile, cb) => {
            console.log(profile)
            return cb(null, profile)
        }
    )
)

module.exports = passport.authenticate('facebook')
