import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonGroup, Badge } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import useFetch from "../Hooks/useFetch"
import { CartState } from '../ContextApi/Search';



const HeaderLocationSearchBar = () => {
    const { state: { cart } } = CartState();
    const { data, loading } = useFetch("http://localhost:5000/hotel/allhotel")
    const navigate = useNavigate();
    const [input, setInput] = useState("")
    const [search, setSearch] = useState("")
    const handleSearch = () => { navigate("/restaurants", { state: { input, search } }) }
    let newArr = data && data.map(value => value.city_name)
    let newArray = [...new Set(newArr)]
    // const [cartvalue, setCartvalue] = useState([])
    /* useEffect(() => {
        const data = localStorage.getItem('CART');
        setCartvalue(JSON.parse(data));
    }, []) */

    // console.log(cart);
    // console.log(newArray)
    // console.log(input);
    // console.log(search);
    return (
        <div className='header-right'>
            <div className="header-location-search-bar">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                        <i className='bi bi-geo-alt-fill text-danger'></i>
                    </div>
                    <div>
                        <Dropdown as={ButtonGroup}>
                            <input className="header-input-bar" type="text" placeholder={input} onChange={e => setInput(e.target.value)}>
                            </input>
                            <Dropdown.Toggle split variant="" style={{ Outline: "none" }} id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                {loading ? "" : (newArray && newArray.map((value, index) => {
                                    return (<>
                                        <Dropdown.Item key={index} onClick={() => { setInput(`${value}`) }}>{value}</Dropdown.Item>
                                    </>)
                                }))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="location-search-separator"></div>
                </div>
                <div className="header-search-bar">
                    <input className="search-input" type="text" placeholder='Search for restaurant, Cuisine or a Dish' onChange={e => setSearch(e.target.value)} />
                    <span><button style={{ border: "none", backgroundColor: "transparent" }} onClick={handleSearch}><i className="bi bi-search cur"></i></button></span>
                </div>
                <div style={{ display: "flex" }}>
                    <Link to="/cart">
                        <i className="bi bi-cart" style={{ display: "inline-flex", position: "relative" }}><Badge bg="secondary" style={{ fontSize: "10px", display: "flex", borderRadius: "70px", marginLeft: "22px", position: "absolute", }}>{cart.length}</Badge></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderLocationSearchBar
