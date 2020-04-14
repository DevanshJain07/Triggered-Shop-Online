const express = require("express");
const router = express.Router();

const {getProductById,createProduct,getProduct,photo,deleteProduct,updateProduct} = require("../controllers/product");
const {getUserById} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);

//read
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);

//delete
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct);
//update
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct);
//listing route

module.exports = router;
