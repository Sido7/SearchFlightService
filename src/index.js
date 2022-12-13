const express = require('express')

function setUpServer (){
    const app = express()
    
    const port = 3000

    app.listen(port,()=>{
        console.log("server started at port"+port)
    })
}

setUpServer()