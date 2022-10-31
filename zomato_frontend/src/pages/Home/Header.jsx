import React, { useContext } from 'react'
import HeaderLocationSearchBar from '../../components/commonComponents/HeaderLocationSearchBar'
import { useNavigate } from 'react-router-dom'
import "./HomeCss/Header.css"
import { AuthContext } from '../../components/ContextApi/AuthContext'
const Header = () => {
    const navigate = useNavigate()
    const { user, dispatch } = useContext(AuthContext)
    //HandleEvent for LogOut
    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type: "LOG_OUT" });
        // navigate("/")
    }
    // console.log({ user });
    return (
        <div className='container bg-light header'>

            <div>
                <img className='zomato-logo cur' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|193:22&amp;crop=198:42;" alt='zomato-logo'></img>
            </div>
            <HeaderLocationSearchBar />
            <span className="profile">
                {user ? <span onClick={handleClick}>LOGOUT</span> : <span onClick={() => navigate("/login")}>Login</span>}
                <span className='m-2'></span>
                <i className='bi bi-person-circle'><h6 className='center ps-2'>{}</h6></i>
            </span>
        </div>
    )
}

export default React.memo(Header)