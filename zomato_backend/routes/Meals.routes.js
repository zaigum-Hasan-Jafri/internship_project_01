const mealsRouter = require ("express").Router()
const MealController = require("../Controller/Meals/MealController");
const verifytoken = require("../Controller/verifyToken/verifytoken");

mealsRouter.post('/createmeal/:hotelid',verifytoken.verifyAdmin, MealController.create)

mealsRouter.put('/updatemeal/:id',verifytoken.verifyAdmin, MealController.update)

mealsRouter.delete('/deletemeal/:id/:hotelid',verifytoken.verifyAdmin, MealController.delete)

mealsRouter.get('/findmeal/:id', MealController.single)

mealsRouter.get('/allmeal', MealController.all)

mealsRouter.use((err, req, res, next)=>
{
    const errorStatus = 500||err.status||456;
    const errorMessage = err.message||"message caught in the handler";
    return res.status(errorStatus).json(
        {
            
            name:"Meal Error",
            Status:errorStatus,
            message:errorMessage,
        }
    );
})

module.exports= mealsRouter;