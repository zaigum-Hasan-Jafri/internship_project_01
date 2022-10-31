const jwt = require("jsonwebtoken")


exports.verifytoken = (req,res,next)=>
{
    const token = req.cookies.access_token;
    if(!token)
    {
        next(res.status(456)&&res.json("You are not authenticate"))
    }

    jwt.verify(token,process.env.JWT,(err,user)=>
    {
        if(err)
        {
            return next("You do not contain the correct token ")
        }
        req.user = user;
        next();
    })
}


exports.verifyUser = (req,res,next)=>
{
    this.verifytoken(req,res,()=>
    {
        if(req.user.id === req.params.id || req.user.isAdmin)
        {
            next()
        }
        else
        {
            next(res.status(400)&& res.json("You are not authorized"))
        }
    })
}


exports.verifyAdmin = (req,res,next)=>
{
    this.verifytoken(req,res,()=>
    {
        if(req.user.isAdmin)
        {
            next()
        }
        else
        {
            next(res.status(400)&& res.json("You are not authorized as Admin"))
        }
    })
}