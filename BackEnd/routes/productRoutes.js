const express = require('express')
const { getAllProducts,creatProduct, } = require('../Controller/productController')


const router =  express.Router()
router.route("/product/new").post(creatProduct);
router.route("/product").get(getAllProducts);



module.exports = router