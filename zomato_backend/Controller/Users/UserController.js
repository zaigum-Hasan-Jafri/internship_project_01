const User = require("../../models/UserSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.register = async (req, res, next) => {
    const value = req.body;
    const saltRound = 10;
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(value.password, salt);
    const newUser = new User({
        username: value.username,
        email: value.email,
        password: hash,
        checkpassword: value.password,
    });
    try {
        const saveUser = await newUser.save()
        res.status(201).json(saveUser);
    } catch (error) {
        next(error)
    }
}


exports.login = async (req, res, next) => {

    let value = req.body;
    const user = await User.findOne({ username: value.username })
    try {
        if (!user) {
            return res.status(404).json({message:"User Not Found"})
        }
        const ispasswordCorrect = await bcrypt.compare(value.password, user.password)
        if (!ispasswordCorrect) {

            return res.status(400||404).json({message:"Password is Incorrect"});
        }
        const authToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        const { password, isAdmin, checkpassword, ...otherdata } = user._doc
        res.cookie("access_token", authToken, {
            httpOnly: true,
        }).status(200).json(otherdata);
    } catch (error) {
        next(error);
    }
}


exports.update = async (req, res) => {
    const value = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: value }, { new: true })

        res.status(200).json(updateUser)
    } catch (error) {
        res.status(456).json(error || "Problem occured in the User Update controllerApi")
    }
}



exports.delete = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(456).json(error || "Problem occured in the user delete controllerApi")
    }
}
exports.single = async (req, res, next) => {

    try {
        const findUser = await User.findById(req.params.id)
        res.status(200).json(findUser);
    } catch (error) {
        next(error)
    }
}
exports.all = async (req, res, next) => {

    try {
        const Users = await User.find()
        res.status(200).json(Users);
    } catch (error) {
        next(error)
    }
}