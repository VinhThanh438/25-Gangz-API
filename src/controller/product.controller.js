import pool from '../config/DB.config'

const ProductController = {
    getAll: async (req, res) => {
        try {
            const query = 'select * from product'
            const [data] = await pool.execute(query)
            return res.status(200).json({
                message: 'get all product',
                data: data,
            })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    getProductById: async (req, res) => {
        try {
            const query = 'select * from product where id = ?'
            const productId = req.params.id
            const [data] = await pool.execute(query, [productId])
            return res.status(200).json({
                message: 'get product by id',
                productId,
                data: JSON.stringify(data),
            })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    addProduct: async (req, res) => {
        try {
            const query =
                'insert into product (`name`, `price`, `imgAddress`, `condition`) values (?, ?, ?, ?)'
            await pool.execute(query, [
                req.body.name,
                req.body.price,
                req.body.imgAddress,
                req.body.condition,
            ])
            return res.status(201).json({
                message: 'add success!',
                newData: req.body,
            })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const query = 'delete from product where `id` = ?'
            const productId = req.params.id
            await pool.execute(query, [productId])
            return res.status(204).json({
                id: productId,
            })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },

    editProduct: async (req, res) => {
        try {
            const query =
                'UPDATE product SET `name` = ?, `price` = ?, `imgAddress` = ?, `condition` = ? WHERE id = ?;'
            const productId = req.params.id
            const { name, price, imgAddress, condition } = req.body
            await pool.execute(query, [name, price, imgAddress, condition, productId])
            return res.status(200).json({
                message: 'edit product by id',
                id: productId,
            })
        } catch (err) {
            return res.status(500).json({ message: 'server error', error: err })
        }
    },
}

module.exports = ProductController
