const Sequelize=require("sequelize");

const sequelize=require("../util/database");

const Expense=sequelize.define("message",{
  id:{
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  message: Sequelize.STRING,
  
  
});

module.exports = Expense;
