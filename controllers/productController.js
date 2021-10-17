const Product = require('./../models').Product;
const Cart = require('./../models').Cart;


exports.getAllProducts = async (req, res) => {
    let products = await Product.findAll()
    products = products.map(product => {
        return product.dataValues
    });
    res.render('products.jsx', { products: products });

}

