const Hotel = require("../../models/HotelSchema")
exports.create = async (req, res) => {
    value = req.body
    const newHotel = new Hotel(value)
    try {
        const saveHotel = await newHotel.save()

        res.status(201).json(saveHotel)
    } catch (error) {
        res.status(456).json(error || "Problem occured in the Hotel controllerApi")

    }
}
exports.update = async (req, res) => {
    const value = req.body;
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: value }, { new: true })

        res.status(200).json(updateHotel)
    } catch (error) {
        res.status(456).json(error || "Problem occured in the Hotel controllerApi")
    }
}
exports.delete = async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json("deleted successfully")
    } catch (error) {
        res.status(456).json(error || "Problem occured in the Hotel controllerApi")
    }
}
exports.single = async (req, res, next) => {

    try {
        const findHotel = await Hotel.findById(req.params.id)
        res.status(200).json(findHotel);
    } catch (error) {
        next(error)
    }
}
exports.all = async (req, res, next) => {
    const { min, max, sortvalue, ...other } = req.query;
    const searchMealtype = req.query.type;
    let hotels = [];
    try {
        const Hotels = await Hotel.find({...other,cost:{$gte:min||1,$lte:max||1000}}).sort({cost:sortvalue||1}).limit(req.query.limit)
        res.status(200).json(Hotels);
        /* if (searchMealtype) {
            hotels = await Hotel.find({"type.name":searchMealtype})
        }
        else {
            hotels = await Hotel.find();
        }
        res.status(200).json(hotels) */
    } catch (error) {
        next(error)
    }
}
// exports.byCity = async (req, res, next) => {
//     const cities = req.query.cities.split(",")
//     try {
//         const citylist = await Promise.all(cities.map(city => {
//             return Hotel.find({ city_name: city });
//         }))
//         res.status(200).json(citylist);
//     } catch (error) {
//         next(error)
//     }

// }
// exports.byType = async (req, res, next) => {

//     const types = req.query.types.split(",")
//     try {
//         const typelist = await Promise.all(types.map((type, i) => {
//             return Hotel.find({ type: type[i] })
//         }))
//         res.status(200).json(typelist);
//     } catch (error) {
//         next(error)
//     }
// }

