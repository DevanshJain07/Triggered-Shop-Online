const express = require("express");
const router = express.Router();
const {getUserById,pushOrderInPurchaseList} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const{updateStock}=require("../controllers/product");
const {getOrderById,createOrder,getAllOrders}=require("../controllers/order");

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

//Actual routes
//create
router.post("/order/create/:userId",isSignedIn, isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder);
//read
router.get("/order/all/:userId",isSignedIn, isAuthenticated,isAdmin,getAllOrders);

module.exports=router;