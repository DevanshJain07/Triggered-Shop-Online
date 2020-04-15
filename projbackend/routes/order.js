const express = require("express");
const router = express.Router();
const {getUserById,pushOrderInPurchaseList} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const{updateStock}=require("../controllers/product");
const {getOrderById}=require("../controllers/order");

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

//Actual routes

module.exports=router;