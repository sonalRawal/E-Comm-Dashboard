const express = require('express');
const router = express.Router();

const {register,userLogin} = require('../Controller/userController');
const {addProduct,getProducts,deleteProduct,getProductById,updateProduct,productByKey} = require('../Controller/productController')

router.post("/register", register);

router.post("/login", userLogin);

router.post("/add-product", addProduct);

router.get("/products", getProducts);

router.delete("/product/:id", deleteProduct),
router.get("/product/:id", getProductById);

router.put("/product/:id",updateProduct );

router.get("/search/:key",productByKey );

module.exports = router ;