const express = require('express')
const bodyparser = require('body-parser')



const {Port,dbSync} = require('./config/serverconfig')
const v1ApiRoutes = require('./routes/index')

const db = require('./models/index')
const {Airplane} = require('./models/index')



async function setUpServer(){
    const app = express()

    
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api',v1ApiRoutes)
     
    if(dbSync)
    {
        await db.sequelize.sync({ alter: true })
    }
    await Airplane.create({
        modelNumber: "Douglas DC-3"
    })
    app.listen(Port,async()=>{
        console.log("server started at port "+Port)
    })
}

setUpServer()