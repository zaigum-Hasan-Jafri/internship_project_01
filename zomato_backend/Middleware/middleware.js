// middleware is used for the authentication of the User

//create a middleware
const jsonwebtoken = require('jsonwebtoken');
exports.auth = async (req,res,next)=>
{
    // to request header token.
    const token = req.header('x-access-token')

    //Not valid User
    if(!token)
    {
        return res.status(456).json({message:"Authentication failed"})
    }

    //verified method take 2 values token and secret key
    const verified = jsonwebtoken.verify(token,"key")
    if(!verified)
    {
        res.status(456).json({message:"Token verification: Failed authentication"})
    }
    // specify values
    req.user_id = verified.id;
    next();
}
 