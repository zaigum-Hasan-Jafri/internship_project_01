const userRouter = require('express').Router()
const User = require ("../Controller/Users/UserController")
const verifytoken = require("../Controller/verifyToken/verifytoken")

userRouter.get("/checkauth",verifytoken.verifytoken,(req,res,next)=>
{
    console.log("WELCOME You are logged In...")
})

userRouter.get("/checkuser/:id",verifytoken.verifyUser,(req,res,next)=>
{
    console.log("WELCOME You are logged In and can delete your account...")
})

userRouter.get("/checkAdmin/:id",verifytoken.verifyAdmin,(req,res,next)=>
{
    console.log("WELCOME You are logged In Admin and can delete all account...")
})


userRouter.post("/register",User.register)

userRouter.post("/login",User.login)

userRouter.put('/update/:id',verifytoken.verifyUser, User.update)

userRouter.delete('/delete/:id',verifytoken.verifyUser, User.delete)

userRouter.get('/finduser/:id',verifytoken.verifyUser, User.single)

userRouter.get('/alluser',verifytoken.verifyAdmin, User.all);


userRouter.use((err, req, res, next)=>
{
    const errorStatus = 500||err.status||456;
    const errorMessage = err.message||"Error message caught in the user Routes handler";
    return res.status(errorStatus).json(errorMessage);
})

module.exports = userRouter