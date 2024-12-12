

const express = require('express');


const router = express.Router();
const userauthenticate=require("../Middleware/auth")
const userController=require("../Controllers/messages")



router.post("/sendMessage/:groupId",userauthenticate.authenticate,userController.sendMessage);
router.get("/allMessages/:groupId",userauthenticate.authenticate,userController.allMessages);


module.exports = router;