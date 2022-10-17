import express from 'express'
import passport from 'passport'
import authController from '../controller/auth.controller'
import authentication from '../middleware/auth.middleware'
import authorize from '../middleware/authorize'
import passportAuth from '../middleware/passport'
const router = express.Router()

router.post('/register', authentication.register, authController.register)
router.post('/login', authController.logIn)
router.post('/delete/:id', authorize.userAndAdminAuthorize, authController.deleteUser)
router.post('/auth/refresh', authController.requestRefreshToken)
router.post('/logout', authorize.verifyToken, authController.logOut)
// router.post('/passport-login', passportAuth, (req, res) => res.send('oke'))
router.get('/login', (req, res) => res.render('loginFb.ejs'))
router.get('/auth/facebook', passportAuth)
router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/api/user/auth/facebook')
    }
)

module.exports = router
