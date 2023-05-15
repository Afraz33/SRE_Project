const express = require('express');
const { Authenticate,checkSeller } = require('../controllers/authController');
const sellerRouter = express.Router();
const {signup,login,update,delAccount}=require("../controllers/SellerController");

// Signup
sellerRouter.post('/signup', signup);

// Login
sellerRouter.post('/login', login);

// Update
sellerRouter.put('/update/:id',Authenticate,checkSeller, update);

// Delete
sellerRouter.delete('/delete/:id',Authenticate,checkSeller, delAccount);

module.exports = sellerRouter;





