const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Posts = sequelize.define('Posts',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    discription:{
        type:Sequelize.STRING,
        allowNull:false,
    },
})

module.exports = Users