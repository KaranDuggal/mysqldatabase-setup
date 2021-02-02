const Sequelize = require('sequelize')
const sequelize = new Sequelize('cardb','root','WelCome@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;




// const mysql = require('mysql2')
// const Sequelize = require('sequelize')
// const data = require('../data')

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'cardb',
//     password:"WelCome@123"
// })