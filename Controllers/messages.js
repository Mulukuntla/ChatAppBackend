const message= require("../models/messages")
const sendMessage= async (req,res,next) =>{
    console.log("Hii")
    
    try{
        const messagee=req.body.message
        const id=req.user.id
        console.log(id)
        const sendMessage=await message.create({id:id,message:messagee})
        res.status(200).json({message:"message sent"})
    }
     
    
    catch(err){
      console.log(err)
      res.status(500).json({error:err});
    }
  }
  
  
  
  
      
  module.exports={
    
    sendMessage
  }
  
  
 