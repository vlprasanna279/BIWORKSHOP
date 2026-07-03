const express= require('express')

const app= express()

const PORT= 3002;

//webserver
app.use(express.static("frontend"))

app.listen(PORT,function(){
    console.log("Server is running at http://localhost:" + PORT)
})
