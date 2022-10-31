const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema(
    {
        restaurantName: {
          type: String,
          required: true
        },
        itemPrice: {
          type: Number,
          required: true
        },
        itemName: {
          type: String,
        },
        itemDescription: String,
        isVeg: {
          type: Boolean,
          default: false
        },
        rating:
        {
          type: Number,
          min: 0,
          max: 5
        }
      }
)

module.exports = mongoose.model("Meals", MealSchema);



/* [
    {
         
         itemPrice :87,
         itemName : Gobi Manchuiran ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Gulab 
    },
    {
         
         itemPrice :49,
         itemName : Lemnon Rice ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :true,
         restaurantName : Gulab 
    },
    {
         
         itemPrice :166,
         itemName : Chicken Rice Fried ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Gulab 
    },
    {
         
         itemPrice :222,
         itemName : Mutton Fried Thandhoui ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Gulab 
    },
    {
         
         itemPrice :123,
         itemName : Mutton Thandhouri ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Gulab 
    },
    {
         
         itemPrice :44,
         itemName : Curd Rice ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :true,
         restaurantName : Gulab 
    }, {
         
         itemPrice :183,
         itemName : Chicken Biryani ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Food Adda 
    }, {
         
         itemPrice :138,
         itemName : Lug Bug chicken ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Food Adda 
    },
    {
         
         itemPrice :99,
         itemName : Chicken Fried Curry ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Food Adda 
    },
    {
         
         itemPrice :94,
         itemName : Chicken Rice ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Food Adda 
    },
    {
         
         itemPrice :159,
         itemName : Mutton Fried Curry ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Food Adda 
    },
    {
         
         itemPrice :139,
         itemName : Egg Fried Curry ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Apna Punjab 
    },
    {
         
         itemPrice :199,
         itemName : Egg Fried Rice ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Apna Punjab 
    }, 4
    
    {
         
         itemPrice :69,
         itemName : Tomato Rice ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :true,
         restaurantName : Apna Punjab 
    },
    
    {
         
         itemPrice :199,
         itemName : Mutton Thandhori ,
         itemDescription : Deep Fried Caulci flower flores tosted in pungent spieces ,
         isVeg :false,
         restaurantName : Apna Punjab 
    }
   
] */