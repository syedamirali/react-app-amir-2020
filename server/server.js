const express=require('express');
const path=require('path');
const app=express();

const folderPath=path.join(__dirname,'../public');
app.use(express.static(folderPath));

app.listen(5000,()=>{
    console.log("I am Up");
})