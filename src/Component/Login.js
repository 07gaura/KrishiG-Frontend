import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {useState} from "react"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword]=useState("")

  function click() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "userName": username,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/login/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-3 position-relative top-50 start-50 translate-middle p-5 custom-login '>
          <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className='form-label'>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={click}>Submit</button>
          </form>
          <Link to="/signup">Signup</Link>
        </div>
        
      </div>
        
    </div>
  )
}
