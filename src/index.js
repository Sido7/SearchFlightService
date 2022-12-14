const express = require('express')
const {Port} = require('./config/serverconfig')
async function setUpServer (){
    const app = express()
    app.listen(Port,()=>{
        console.log("server started at port"+Port)
    })
}

setUpServer()