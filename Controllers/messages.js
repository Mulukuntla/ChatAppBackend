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
      console.log(req.params.id)
      if(req.params.id== -1){
        const allMessages=await message.findAll()
        return res.status(200).json({allMessages:allMessages})

      }
      const allMessages=await message.findAll({where:{id:req.params.id}})
      const all=allMessages[allMessages.length-1].id
      const allMessagess=await message.findAll({
        offset:all,
      })
      res.status(200).json({allMessages:allMessagess})

      
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
  
  
 