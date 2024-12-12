const message= require("../models/messages")
const sendMessage= async (req,res,next) =>{
    console.log("Hii")
    try{
      const id=req.user.id
      const name=req.body.name  
      const messagee=req.body.message
      const groupId=req.params.groupId
      console.log(id,name,message,groupId)
      const sendMessage=await message.create({userName:name,message:messagee,userId:req.user.id,groupId:groupId})
      res.status(200).json({message:sendMessage})
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:err});
    }
  }


  const allMessages= async (req,res,next) =>{
    console.log("Hii")
    try{
      console.log(req.params.groupId)
      const allMessages=await message.findAll({where:{groupId:req.params.groupId}})
      console.log(allMessages)
      res.status(200).json({allMessages:allMessages})
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:err});
    }
  }
  
  
  
  
      
  module.exports={
    sendMessage,
    allMessages
  }
  
  
 