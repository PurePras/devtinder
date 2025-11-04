 const adminAuth = (req,res,next)=>{
    console.log("admin auth is getting checked");
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized)
    {
        res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
};
 const userAuth = (req,res,next)=>{
    console.log("admin auth is getting checked");
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized)
    {
        res.status(401).send("Unauthorized request");
    }
    else{
        res.send("from auth.js response is coming")
    }
};
module.exports={
    adminAuth,
    userAuth,
}