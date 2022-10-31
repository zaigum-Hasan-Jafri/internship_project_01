//Backend with the MVC pattern (models, controller, and router folder seperate)
const express = require('express');
const dotenv = require('dotenv');
const connectToMongo = require('./database');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(cookieParser())
// const User = require('./models/UserSchema');
const hotelRouter = require('./routes/routes');
const userRouter = require("./routes/Users.routes");
const mealRouter = require("./routes/Meals.routes");
const stripeRoute = require('./routes/stripe.routes');
connectToMongo();

//app.use(express.json()); this will create a intance of the json for the surver (it will not show any warning in the body and simply reutrn { } like in the POST api method)
const port = 5000;

//routes
app.use('/hotel', hotelRouter);
app.use('/users', userRouter);
app.use('/meals', mealRouter);
app.use('/cart', stripeRoute);


//error Handling
/* app.use((err, req, res, next)=>
{
    const errorStatus = err.errorStatus||500||456;
    const errorMessage = err.errorMessage||"message caught in the handler";
    return res.status(errorStatus).json(errorMessage);
}) */

app.listen(port, () => {
    console.log(`connection to the ${port} ready and working`);
})