const express = require("express");
const app = express();
// below is called request handler function
app.use("/test" ,(req,res)=>{
    res.send("hello from the server");
})
app.use("/hello",(req,res)=>{
 res.send("hello 1") 
}) 
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777");
});