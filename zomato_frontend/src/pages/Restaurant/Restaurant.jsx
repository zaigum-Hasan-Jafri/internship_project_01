
import React /* ,{useState,useEffect} */from 'react';
import { useLocation } from 'react-router-dom';
// import MealCard from '../../components/Cards/MealCard';
import Overview from '../../components/Overview/Overview';
import Header from '../Home/Header';
import useFetch from '../../components/Hooks/useFetch';
import "./Restaurant.css";
const Restaurant = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const { data } = useFetch(`http://localhost:5000/hotel/findhotel/${path}`)
    // console.log(data);
    const gallery = [
        { src: "https://source.unsplash.com/1600x800/?breakfast" },
        { src: "https://source.unsplash.com/1600x800/?cake" },
        { src: "https://source.unsplash.com/1600x800/?Pizza" },
        { src: "https://source.unsplash.com/1600x800/?Lunch" },
        { src: "https://source.unsplash.com/1600x800/?Dinner" },]

    // const [cartvalue, setCartvalue] = useState([])
    // useEffect((e) => {
    //     const data = localStorage.getItem('CART');
    //     setCartvalue(JSON.parse(data));
    // }, [])
    return (
        <div className='container'>
            <div className=""><Header /></div>
            <hr className='mt-0 mb-5 ' />
            <div className="restaurant-wrapper">
                <h3 className="title center fs-1" style={{ backgroundColor: "teal" }}>{data.name}</h3>
                <div className="address center fs-5">{data.address}
                </div>
                <hr className='mt-0 mb-5' />
                <div className="restaurant-gallery">
                    {gallery.map((photo, i) => {
                        return (
                            <div className="photo-wrapper">
                                <img src={photo.src} alt="" className="restaurant-photo" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr className='mt-0 mb-5' />
            <div>
                <Overview data={data.meals} />
            </div>
            <hr className='mt-0 mb-5' />
        </div>
    )
}

export default (Restaurant)
