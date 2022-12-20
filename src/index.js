const express = require('express')
const bodyparser = require('body-parser')



const {Port} = require('./config/serverconfig')
const v1ApiRoutes = require('./routes/index')



async function setUpServer(){
    const app = express()

    
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api',v1ApiRoutes)

    app.listen(Port,async()=>{
        console.log("server started at port "+Port)
    })
}

setUpServer()