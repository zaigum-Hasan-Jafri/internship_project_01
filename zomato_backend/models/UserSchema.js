const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
        },
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            minlength: 5,
            required: true
        },
        checkpassword: {
            type: String,
            minlength: 5,
            
        },        
        isAdmin: {
            type: Boolean,
            default: false
        },
        Date:{
            type:Date,
            default: new Date()
        },
    },{timestamps:true}
)

module.exports = mongoose.model("Users", userSchema)




/* const restaurantSchema = new Schema(
    {
        _id: String,
        name: String,
        city_name: String,
        city: String,
        area: String,
        locality: String,
        thumb: String,
        cost: Number,
        address: String,
        type: [
            {
                mealtype: String,
                name: String
            },
            {
                mealtype: String,
                name: String
            }
        ],
        Cuisine: [
            {
                cuisine: String,
                name: String
            },
            {
                cuisine: String,
                name: String
            }
        ]
    }
)
const RestaurantModel = mongoose.model(`Restaurant`, restaurantSchema);
module.exports = RestaurantModel; */