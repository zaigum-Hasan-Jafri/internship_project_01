import React from 'react'
import BasicForm from '../BasicForm'
import Input from './Input'

import image from "../../Assets/registration.jpg"
const Login = () => {
  return (
     <div className='row mt-5'>
            <div className="col">
                <BasicForm/>
            </div>
            <div className="col" style={{backgroundImage:`url(${image})`, backgroundSize:'cover'}}>
                <Input />
            </div>
                
        </div> 
  )
}

export default React.memo(Login)