const express = require('express')
const bodyparser = require('body-parser')

const {Port} = require('./config/serverconfig')

async function setUpServer (){
    const app = express()

    app.use(bodyparser.json)
    app.use(bodyparser.urlencoded({extended:true}))

    app.listen(Port,()=>{
        console.log("server started at port "+Port)
    })
}

setUpServer()