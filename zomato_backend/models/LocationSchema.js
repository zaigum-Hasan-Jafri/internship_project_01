const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
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

module.exports = mongoose.model("Locations", LocationSchema)
/* [{
    "_id": "1",
    "name": "Breakfast",
    "content": "Start your day with exclusive breakfast options",
    "image": "Assets/breakfast.jpg"
  },{
    "_id": "2",
    "name": "Lunch",
    "content": "Start your day with exclusive breakfast options",
    "image": "Assets/lunch.jpg"
  },{
    "_id": "3",
    "name": "Dinner",
    "content": "Start your day with exclusive breakfast options",
    "image": "Assets/dinner.png"
  },{
    "_id": "4",
    "name": "Snacks",
    "content": "Start your day with exclusive breakfast options",
    "image": "Assets/snacks.png"
  },{
    "_id": "5",
    "name": "Drinks",
    "content": "Start your day with exclusive breakfast options",
    "image": "Assets/drinks.png"
  },{
    "_id": "6",
    "name": "NightLife",
    "content": "Start your day with exclusive breakfast options",
    "image": "Assets/nightlife.png"
  }] */

/* [{
    "_id": "1",
    "name": "ShalimarBhagh, Delhi",
    "city_id": "1",
    "location_id": "1",
    "country_name": "India"
  },{
    "_id": "2",
    "name": "Janpat, Delhi",
    "city_id": "1",
    "location_id": "2",
    "country_name": "India"
  },{
    "_id": "3",
    "name": "MSP, Delhi",
    "city_id": "1",
    "location_id": "3",
    "country_name": "India"
  },{
    "_id": "4",
    "name": "MSP, Pune",
    "city_id": "2",
    "location_id": "4",
    "country_name": "India"
  },{
    "_id": "5",
    "name": "Anand Vihar, Delhi",
    "city_id": "1",
    "location_id": "5",
    "country_name": "India"
  },{
    "_id": "6",
    "name": "Mahadevapura, Bangalore",
    "city_id": "3",
    "location_id": "5",
    "country_name": "India"
  },{
    "_id": "7",
    "name": "Anna Nagar, Chennai",
    "city_id": "4",
    "location_id": "5",
    "country_name": "India"
  },{
    "_id": "8",
    "name": "Thane, Mumbai",
    "city_id": "5",
    "location_id": "5",
    "country_name": "India"
  }] */