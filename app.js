const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const sequelize=require('./util/database')
const User = require('./routes/User')

var cors=require("cors")
const app = express();




//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));






app.use(cors({
    origin:"*",
    credentials:true,
}));




app.use("/user",User)

app.use((req,res)=>{
  console.log("urll",req.url)
  console.log("originalurll",req.originalUrl)
  
  res.sendFile(path.join(__dirname,`public/${req.url}`));

})









sequelize
.sync()
.then(result =>{
  console.log(result)
  const PORT = process.env.PORT || 4000; 
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})
.catch(err =>{
  console.log(err)
})


