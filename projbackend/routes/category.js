const express = require("express");
const router = express.Router();

const {getCategoryById,createCategory,getCategory,getAllCategory,updateCategory,removeCategory} = require("../controllers/category");
const {getUserById} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("userId", getCategoryById);

// actual routers goes here

//CREATE ROUTES
router.post("category/create/:userId",isSignedIn, isAuthenticated, isAdmin,createCategory);

//READ ROUTES
router.get("/category/:categoryId",getCategory);
router.get("/category/:categories",getAllCategory);

//UPDATE
router.put("category/:categoryId/:userId",isSignedIn, isAuthenticated, isAdmin,updateCategory);

//DELETE
router.delete("category/:categoryId/:userId",isSignedIn, isAuthenticated, isAdmin,removeCategory);

module.exports = router;
