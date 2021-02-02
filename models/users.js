const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Users = sequelize.define('Users',{
    firstname:Sequelize.STRING,
    lastname:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
})

module.exports = Users