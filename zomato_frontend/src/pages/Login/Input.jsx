import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../components/ContextApi/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Input() {

    const navigate = useNavigate();
    const { user, dispatch, error, loading } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:5000/users/login", { username, password })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        }
        catch (error) {
            dispatch({ type: "LOGIN_FAIL", payload: error })
            // console.log(error.response.data.message);
        }
        (user && navigate('/home'))
    }

    return (
        <div className='form-section'>
            <div className="login-inner-form align-self-center" style={{ position: 'absolute' }}>
                <div className="title d-flex">
                    <h3>Sign into your account</h3>
                </div>
                <form className='log-form' method='POST'>
                    <div className="form-group row ">
                        <label className="col-2 col-form-label col-form-label-sm">Username</label>
                        <span className="col-sm-8">
                            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control form-control-sm" id="username" placeholder="Username" />
                        </span>
                        <i className="col-2 bi bi-envelope-fill"></i>
                    </div>
                    <div className="form-group row ">
                        <label className="col-2 col-form-label col-form-label-sm">Password</label>
                        <span className="col-sm-8">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control form-control-sm" id="password" placeholder="password" />
                        </span>
                        <i className="col-2 bi bi-person-circle"></i>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" onClick={handleSubmit} disabled={loading} className="btn btn-danger display" >Login</button><hr />
                    {error && <span className='center'>{error.response.data.message}</span>}

                </form>
            </div>
        </div>
    )
}
