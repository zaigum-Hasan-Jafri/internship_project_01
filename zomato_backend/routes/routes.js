const hotelRouter = require('express').Router()
const RestaurantController = require("../Controller/Restaurants/RestaurantController")
const verifytoken = require("../Controller/verifyToken/verifytoken")
// const authentication = require('../Middleware/middleware');


// hotelRouter.post('/register',controllerApi.registrationUser);

// hotelRouter.post('/login', controllerApi.login);

// hotelRouter.delete('/delete',authentication.auth,controllerApi.delete);

// hotelRouter.get('/restall',controllerApi.restall);

// hotelRouter.get('/restsort', controllerApi.restsort);


//                  **** Hotel Routes ****

hotelRouter.post('/createhotel/',verifytoken.verifyAdmin, RestaurantController.create)

hotelRouter.put('/updatehotel/:id',verifytoken.verifyAdmin, RestaurantController.update)

hotelRouter.delete('/deletehotel/:id',verifytoken.verifyAdmin, RestaurantController.delete)

hotelRouter.get('/findhotel/:id', RestaurantController.single)

hotelRouter.get('/allhotel', RestaurantController.all)

// hotelRouter.get('/restByCity', RestaurantController.byCity)

// hotelRouter.get('/restByType', RestaurantController.byType)

module.exports= hotelRouter;