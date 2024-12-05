//const Expense= require("../models/Expense")
const User= require("../models/User")
const bcrypt = require('bcrypt');



function isstringinvalid(string){
  console.log(string)
  if(string.length==0){
    return true
  }
  else{
    return false
  }
}

const signup= async (req,res,next) =>{
  
  try{
    const name=req.body.name;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber
    const password=req.body.password;
    console.log(name,email,phoneNumber,password)
    const user=await User.findOne({where:{email}})
    console.log("user------------>",user)
    if(user){
      
      return res.status(400).json({message:"usage already exits",success:"false"})
    }
    if(isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)){
      console.log("Hi")
      return res.status(400).json({err:"Bad parameters - Something is missing"})
    }
    const saltrounds=10
    bcrypt.hash(password,saltrounds,async (err,hash)=>{
      if (err) {
        return res.status(500).json({ success: false, message: "Error hashing password." });
      }
      await User.create({userName:name,email:email,phoneNumber:phoneNumber,password:hash})
      res.status(201).json({message:"Successfully created a new user"})
      
    })
  }  
  catch(err){
    res.status(500).json(err);
  }
}




    
module.exports={
   
    signup,
}