import React from 'react'
import {useState} from "react"
import { Outlet, Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword]=useState("")
  function click(){
    console.log("run")
  }
  return (
    <div className='container '>
        <div className='col-md-6 position-absolute top-50 start-50 translate-middle p-5 custom-login '>
            <div class="row">
                <div class="col-md-6 p-2">
                
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="Email Id" aria-label="Email Id" />
                </div>
                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                </div>
                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="Mobile No" aria-label="Mobile No" />
                </div>
                <div class="col-md-6 p-2">
                    <textarea className="form-control" placeholder="Address" aria-label="Address"/>
                </div>

                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" maxLength={6} placeholder="Pincode" aria-label="Pincode" />
                </div>

                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="Tehsil" aria-label="Tehsil" aria-disabled />
                </div>

                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="City" aria-label="City" aria-disabled />
                </div>

                <div class="col-md-6 p-2">
                    <input type="text" className="form-control" placeholder="State" aria-label="State" aria-disabled />
                </div>
                
                <div class="col-md-6 p-2">
                   <input type="submit" className="btn btn-primary" name="Submit" onClick={click}/>
                </div>
            </div>
        </div>    
    </div>
  ) 
}

export default Signup
