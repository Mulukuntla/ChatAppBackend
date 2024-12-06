

const express = require('express');


const router = express.Router();
const userauthenticate=require("../Middleware/auth")
const userController=require("../Controllers/messages")



router.post("/sendMessage",userauthenticate.authenticate,userController.sendMessage);
router.get("/allMessages/:id",userauthenticate.authenticate,userController.allMessages);


module.exports = router;