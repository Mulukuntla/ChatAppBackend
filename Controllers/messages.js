const message= require("../models/messages")
const sendMessage= async (req,res,next) =>{
    console.log("Hii")
    try{
      const id=req.user.id
      const name=req.body.name  
      const messagee=req.body.message
      console.log(id,name,message)
      const sendMessage=await message.create({userId:id,userName:name,message:messagee})
      res.status(200).json({message:messagee})
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:err});
    }
  }


  const allMessages= async (req,res,next) =>{
    console.log("Hii")
    try{
       
        const allMessages=await message.findAll()
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
  
  
 