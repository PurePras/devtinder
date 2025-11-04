// const express = require("express");
// const app = express();
// // below is called request handler function
// // app .use match all http match
// // .get only handle GET calls
// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log("query is : ",req.params);
//     res.send("ab path regex"); 
// })
// // app.use("/user",(req,res)=>{
// //     res.send("hahahahhahah");
// // })
// // app.get("/user",(req,res)=>{
// //     res.send("path get testing")
// // app.post("/user",(req,res)=>{
// //     console.log("data is saved in db");
// //     res.send("saved post successfully");
// // })
// // app.delete("/user",(req,res)=>{
// //     res.send("deleted successfully");
// // })
// // app.use("/test" ,(req,res)=>{
// //     res.send("ello from the server");
// // })
// // app.use("/hello/12",(req,res)=>{
// //     res.send("12 hello inside"); 
// // }) 
// // app.use("/hello",(req,res)=>{
// //  res.send("hello ") 
// // })

// // app.use("/",(req,res)=>{
// //     res.send("Namaste Prashant");
// // })
// app.listen(7777 ,()=>{
//     console.log("server is successfully listening on port 7777");
// });

// const express = require("express");
// const app = express();
// app.use("/user",(req,res)=>{
//      console.log("handling the route user!!");
//      res.send("Response!!");
     
// })
// app.listen(7777,()=>{
//     console.log("pm server is successfully listening to port 7777......");
// });
const express = require("express");
const app = express();

// app.get("/user", (req, res) => {
//     console.log("Handling the /user route!!");
//     res.send("Response!!");
// });
// also use "app.use" in place of get
app.get("/user",
    [(req,res,next)=>{
     console.log("handling the route user!!");
     next();
    //  res.send("Response 1!!");
},
(req,res,next)=>{
console.log("handling the route user 2!!");
next();
// res.send("Response 2!!");
}],
(req,res,next)=>{
    console.log("handling the route user 3!!");
    next();
    // res.send("Response 3!!");
},
(req,res,next)=>{
     console.log("handling the route user 4!!");
     next();
    // res.send("response 4 !!");
},
(req,res,next)=>{
    console.log("5th ");
    res.send("response 5th");
}
)

app.listen(7777, () => {
    console.log("PM1 server is successfully listening to port 7777......");
});
