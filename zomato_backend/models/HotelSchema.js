const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema(
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
          meals: {
               type:Array
          },
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


     /* */
)

module.exports = mongoose.model("Hotel", HotelSchema)
