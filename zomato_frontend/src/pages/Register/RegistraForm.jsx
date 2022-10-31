import axios from 'axios';
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

export default function RegistraForm() {
  const [email,setEmail] = useState("user10@gmail.com")
  const [username,setUsername] = useState("user10")
  const [password,setPassword] = useState("user123")
  const [checkpassword,setCheckpassword] = useState("user123")
  console.log(email,password,username,checkpassword)

  const handleSubmit = async (e)=>
  {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/users/register",{email,password,username,checkpassword})
    console.log(res)
  }
  return (
    <div className='form-section'>
      <div className="row-lg-12">
        <h3 style={{display:'flex',justifyContent:"center"}}>Create New Account</h3>
      </div>
      <div>
        <form className='reg-form' >
          <div className="form-group row ">
            <label  className="col-2 col-form-label col-form-label-sm">Email</label>
            <span className="col-sm-8">
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-sm" id="email" placeholder="Email" />
            </span>
            <i className="col-2 bi bi-envelope-fill"></i>
          </div>
          <div className="form-group row ">
            <label className="col-2 col-form-label col-form-label-sm">Username</label>
            <span className="col-sm-8">
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control form-control-sm" id="username" placeholder="username" />
            </span>
            <i className="col-2 bi bi-person-circle"></i>
          </div>
          <div className="form-group row ">
            <label className="col-2 col-form-label col-form-label-sm">Password</label>
            <span className="col-sm-8">
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-sm" id="password" placeholder="Password" />
            </span>
            <i className="col-2 bi bi-lock-fill"></i>
          </div>
          <div className="form-group row ">
            <label className="col-2 col-form-label col-form-label-sm">Re-Enter password</label>
            <span className="col-sm-8">
              <input type="text" value={checkpassword} onChange={(e)=>setCheckpassword(e.target.value)} className="form-control form-control-sm" id="checkpassword" placeholder="Password" />
            </span>
            <i className="col-2 bi bi-check2-circle"></i>
          </div>
          <button onClick={handleSubmit} className="btn btn-danger display" >Submit</button>{/* <span>Something went wrong</span> */}
        </form>
      </div>

    </div>

  )
}
