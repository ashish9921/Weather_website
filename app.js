const express =require('express');
const path = require('path');
const fs = require('fs');
const app =express();
const port=process.env.port ||8000;

const static_web= path.join(__dirname,'./web')
app.use(express.static(static_web))
app.use('/about',express.static(path.join(__dirname,'./static')))
app.use('/Weather',express.static(path.join(__dirname,'./wether')))


app.get("*",(req , res )=>{
    res.send("404 error opps ")

})
app.listen(port, () =>{
    console.log(`listen to port ${port}`)
})