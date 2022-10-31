import React from 'react'
import { Link } from "react-router-dom";


export default function BasicForm() {
  return (
    <div className='container-basic basic'>
      <div className="col-sm-5 bg-img align-self-center">
        <div className="info">
          <div className="logo clearfix">
            <a href="/" className="nav-brand"><i className="bi bi-laptop-fill"></i></a>
          </div>
          <div className="btn-section clearfix">
          <Link to="/login/"><button className="nav-link link-btn btn-primary"><i className="bi bi-laptop"></i>LOGIN</button></Link>
          <Link to="/register/"><button className="nav-link link-btn btn-info"><i className="bi bi-laptop-fill"></i>SIGNIN</button></Link>
          <Link to="/"><button className="nav-link link-btn btn-success"><i className="bi bi-home"></i>Home</button></Link>
            
            
          </div>

        </div>

      </div>
    </div>
  )
}