const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const sequelize=require('./util/database')
const User = require('./routes/User')
const messages = require('./routes/messages')
const group= require('./routes/group')

const userTable=require("./models/User")
const messagesTable=require("./models/messages")
const groupTable=require("./models/group")
const usergroupTable=require("./models/usergroup")

var cors=require("cors")
const app = express();




//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

userTable.hasMany(messagesTable); // User has many Posts
messagesTable.belongsTo(userTable); 

groupTable.hasMany(messagesTable); // User has many Posts
messagesTable.belongsTo(groupTable); 
userTable.belongsToMany(groupTable, { through: "usergroup" });
groupTable.belongsToMany(userTable, { through: "usergroup"});

usergroupTable.belongsTo(userTable, { foreignKey: 'userId' });
usergroupTable.belongsTo(groupTable, { foreignKey: 'groupId' });

groupTable.belongsToMany(userTable, { through: usergroupTable, foreignKey: 'groupId' });
userTable.belongsToMany(groupTable, { through: usergroupTable, foreignKey: 'userId' });



app.use(cors({
    origin:"*",
    credentials:true,
}));




app.use("/user",User)
app.use("/messages",messages)
app.use("/group",group)












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


