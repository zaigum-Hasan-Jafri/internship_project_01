const Hotel = require('../../models/HotelSchema')
const Meals = require("../../models/MealSchema")

exports.create = async (req, res, next) => {
    const HotelId = req.params.hotelid;
    const newMeal = new Meals(req.body);
    try {
        const saveMeal = await newMeal.save()
        try {
            await Hotel.findByIdAndUpdate(HotelId, { $push: { meals: saveMeal} })
        } catch (error) {
            next(error)
        }
        res.status(201).json(saveMeal)
    } catch (error) {
        next(error);
    }
}

exports.update = async (req, res) => {
    const value = req.body;
    try {
        const updateMeal = await Meals.findByIdAndUpdate(req.params.id, { $set: value }, { new: true })

        res.status(200).json(updateMeal)
    } catch (error) {
        res.status(456).json(error || "Problem occured in the Meal controllerApi")
    }
}
exports.delete = async (req, res) => {
    const HotelId = req.params.hotelid;

    try {
        await Meals.findByIdAndDelete(req.params.id, { new: true })
        try {
           const deleteMeal = await Hotel.findByIdAndUpdate(HotelId, { $pull: { meals:req.params.id } })
        } catch (error) {
            next(error)
        }
        res.status(200).json(deleteMeal);
    } catch (error) {
        res.status(456).json(error || "Problem occured in the Meal controllerApi")
    }
}
exports.single = async (req, res, next) => {

    try {
        const findMeal = await Meals.findById(req.params.id)
        res.status(200).json(findMeal);
    } catch (error) {
        next(error)
    }
}
exports.all = async (req, res, next) => {

    try {
        const meals = await Meals.find()
        res.status(200).json(meals);
    } catch (error) {
        next(error)
    }
}
















//import bcrypt for hashing the password
// const bcrypt = require('bcrypt');
// const User = require('../models/UserSchema');
// const jsonwebtoken = require ('jsonwebtoken');

//post request for registration:
// exports.registrationUser = async (req, res) => {
//     try {
//         let { email, username, password, checkpassword } = req.body


//         //validation request
//         if (!req.body) { res.status(406).json({ err: "Please fill the registeration Form" }); return; }

//         // (!req.body)?res.status(406).json({err:"Please fill the registeration Form"}): "";


//         //validation of the registration Form Input:
//         if (!email || !username || !password || !checkpassword) { return res.status(406).json({ err: "Please Check whether all fields are filled or not!" }) }
//         if (password.length < 5) { return res.status(406).json({ err: "Feel free to make your password more strong" }) }
//         if (password !== checkpassword) { return res.status(406).json({ err: "Please Make sure that both the password are same. " }) }

//         //Hashing the Password
//         const hashpassword = await bcrypt.hashSync(password, 10);


//         //using userSchema structure
//         const newUser = new User({
//             email, // same as email: email
//             password: hashpassword,
//             username, //username: username
//             checkpassword: password,//checkpassword:checkpassword
//             })

//         //save the newUser in mongoDb
//         newUser.save(newUser)
//             .then(
//                 register => {
//                     res.json(register)
//                 }
//             ).catch(error => {
//                 res.status(406).json({ err: error.message || "something went wrong while registeration new User" })
//             })

//         // res.json({ message: "Thank you", email, username, password });

//     }
//     catch (err) {
//         res.status(500).json({ err: err.message || "error while registration" })
//     }
// }

//post request for login:
/* exports.login = async (req, res) => {
    try {
        //get user data;
        const { email, password } = req.body;

        //validation request body
        if (!req.body) {
            res.status(500).json({ err: "Please fill the Form before Login" }); return;
        }
        //validation User_inputs
        if (!email || !password) {
        return res.status(456).json({ err: "Please fill the required fields." })
        }

        //User exista or Not?
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(465).json({ message: "Please Register yourself First!" })
        }


        // compare the password with the bcrypt


        //compare the stored hasspassword and input password
        const isMatch =await bcrypt.compare(password, user.password)
        if(!isMatch)
        {
            return res.status(465).json({message: "Password is wrong"})
        }

        //jsonwebtoken to authenticate the user
        //token sign() method take two vriable as object
        // Insted of token "key" you need to create a randow password

        const user_token =await jsonwebtoken.sign({id:user._id},"key")
        res.json({user_token,username:user.username, email:user.email});
    }
    catch (err) {
        res.status(500).json({ err: `getting error ${res.status(500)} in the login page` })
    }

} */

//delete request for login:
// exports.delete = async (req,res)=>
// {
//     try {
//         const userid =await User.findByIdAndDelete(req.user._id)
//         res.json({message:"User deleted successfully"})

//     } catch (error) {
//         res.status(456).json({message: error.message||"Error While deleting user"});

//     }
// }


// restaurant cases searching
/* exports.restsort = async (req, res) => {
    await RestaurantModel.find({}).sort({ _id: 1 })
        .then((response) => {
            // console.log(data);
            res.json(response)
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
} */

/* exports.restall = async (req, res) => {
    await RestaurantModel.find({ name: "Apna Punjab" })
        .then((data) => {
            console.log(data);
            res.status(200).json(data);

        })
        .catch((err) => {
            console.log(err);
        })
} */

