import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react"

export default function Address({fullname,
    mobileno,
    email,
    address,
    pincode,
    city,
    district,
    state,
    onChangeFullname,
    onChangeEmail,
    onChangeMobileno,
    onChangeAddress,
    onChangeCity,
    onChangeDistrict,
    onChangePincode,
    onChangeState
    }) {
    


    //const [fullname,SetName]
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='col-md-12 m-3'>
      <form>
        <div class="mb-3">
            <label for="firsname" class="form-label">Full Name*</label>
            <input type="text" required value={fullname} class="form-control" id="firsname" onChange={onChangeFullname} />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Mobile Number*</label>
            <input type="number" required value={mobileno} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeMobileno} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" required value={email} class="form-control" id="exampleInputPassword1" onChange={onChangeEmail} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Address</label>
            <textarea value={address} required className="form-control" placeholder="Address" aria-label="Address" onChange={onChangeAddress}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Pincode</label>
            <input type="text" value={pincode} required className="form-control" maxLength={6} placeholder="Pincode" aria-label="Pincode" onChange={onChangePincode} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">District</label>
            <input type="text" value={district} required className="form-control" placeholder="Tehsil" aria-label="Pincode" onChange={onChangeDistrict} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">City</label>
            <input type="text" value={city} required className="form-control" placeholder="City" onChange={onChangeCity} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">State</label>
            <input type="text" value={state} required className="form-control"placeholder="State" onChange={onChangeState} />
        </div>
        </form>
      </div>
    </Box>
  );
}