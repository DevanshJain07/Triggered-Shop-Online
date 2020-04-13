const express = require("express");
const router = express.Router();

const {getCategoryById} = require("../controllers/category");
const {getUserById} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);
router.param("userId", getCategoryById);

module.exports = router;
