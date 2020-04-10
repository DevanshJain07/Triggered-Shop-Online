const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {signout,signup,signin,isSignedIn}=require("../controllers/auth");

//express-validation
router.post('/signup',[
    check("name","Name must be at least 3 chars long")
    .isLength({ min: 3 }),
    check("email","email is required").isEmail(),
    check("password","must be at least 6 chars long").isLength({ min: 6 })
],signup);

router.post(
    '/signin',[
    check("email","email is required").isEmail(),
    check("password","must be at least 6 chars long").isLength({ min: 6 })
],signin);

router.get('/signout',signout);

router.get('/testroute',isSignedIn,(req,res)=>{
    // res.send("A protected route");
    res.json(req.auth);
});

module.exports=router;

 