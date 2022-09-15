import express from 'express'
import authController from '../controller/auth.controller'
import authentication from '../middleware/auth.middleware'
import authorize from '../middleware/authorize'
const router = express.Router()

router.post('/register', authentication.register, authController.register)
router.post('/login', authController.logIn)
router.post('/delete/:id', authorize.userAndAdminAuthorize, authController.deleteUser)
router.post('/auth/refresh', authController.requestRefreshToken)

module.exports = router
