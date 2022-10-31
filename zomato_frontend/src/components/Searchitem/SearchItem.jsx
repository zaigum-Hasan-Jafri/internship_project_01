import React from 'react'
import { Link, } from 'react-router-dom'
import "./SearchItem.css"
const SearchItem = ({item,i}) => {
    console.log(item);
    return (
        <div className='search-item'>
            <img src={item.thumb} alt="Dulab Rrestaurant" className="image" />
            <div className="description">
                <h1 className='title'>{item.name}</h1>
                <sapn className="locality">{item.locality}</sapn>
                <sapn className="item-name">{}</sapn>
                <sapn className="item-description">{}</sapn>
                <sapn className="city">{item.city_name}</sapn>
                <sapn className="mealtype">Available Meal: {item.type[0].name} and {item.type[1].name} </sapn>
                <sapn className="cuisine">Available Cuisine: {item.Cuisine[0].name} and {item.Cuisine[1].name} </sapn>
                <sapn className="address">Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi</sapn>
            </div>
            <div className="detail">
                <div className="rating">
                    <span>Excellent</span>
                    <button>4.5</button>
                </div>
                <div className="detail-price">
                    <span className="price"> 
                    ₹{item.cost} <small>per person</small>
                    </span>
                    {<Link to={`/restaurant/${item._id}`}>
                        <a href="/"><button className='proceed-btn'>Proceed</button></a>
                    </Link>}
                </div>
            </div>

        </div>
    )
}

export default SearchItem
