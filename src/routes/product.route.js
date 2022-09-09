import ProductController from '../controller/product.controller'
import express from 'express'
const router = express.Router()

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getProductById)
router.post('/', ProductController.addProduct)
router.post('/delete/:id', ProductController.deleteProduct)
router.post('/edit/:id', ProductController.editProduct)

module.exports = router
