const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const data = require('./data')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const sequelize = require('./utils/database')
const Users = require('./models/users')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

sequelize.sync({
    logging:console.log,
    force:true
})
.then((result)=>{
    console.log('connection to database is established succesfully');
    app.listen(PORT,()=>{
        console.log('server run');
    })
})
.catch(err=>{
    console.log('database connection failed',err);
})
app.post('/',(req,res)=>{
    console.log('output',req.body);
    Users.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
    // Users.c
    res.json({
        success:true,
        message:'every thing is okay'
    })
})



