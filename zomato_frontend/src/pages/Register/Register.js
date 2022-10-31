import React from 'react'
import BasicForm from "../BasicForm"
import RegistraForm from "./RegistraForm"
import image from "../../Assets/registration.jpg"
const Register = () => {
    
  return (
    <div className='row mt-5'>
            <div className="col">
               <BasicForm/>
            </div>
            <div className="col" style={{backgroundImage:`url(${image})`, backgroundSize:'cover'}}>
                <RegistraForm />
            </div>
        </div>
  )
}

export default React.memo(Register)