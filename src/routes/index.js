import productRouter from './product.route'
import userRouter from './handleUser.route'

const routes = (app) => {
    app.use('/api/product', productRouter)
    app.use('/api/user', userRouter)
}

module.exports = routes
