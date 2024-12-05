

const express = require('express');


const router = express.Router();
const userauthenticate=require("../Middleware/auth")
const userController=require("../Controllers/messages")



router.post("/sendMessage",userauthenticate.authenticate,userController.sendMessage);


module.exports = router;