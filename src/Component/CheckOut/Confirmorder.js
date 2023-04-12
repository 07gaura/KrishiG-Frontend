import React from 'react'
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom'
import ConfirmCartdetails from './ConfirmCartdetails'
function Confirmorder({raw,calc_amount}) {
    
    const [cartProduct,SetCartProduct]=useState([])
    const user_cart_data_processing=()=>{
        var cart_details = localStorage.getItem("cart_details")
        SetCartProduct(JSON.parse(cart_details))
    }
    
    useEffect(()=>{
        user_cart_data_processing()
    }, [])
    const render_cart_product=() => (
        cartProduct.map((name,index)=>(
          //console.log(name)
          <ConfirmCartdetails  item={name} index={index}/>
        ))  
    )
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 m-2'>
            <h5>customer and products details</h5>
            <b>Fullname</b>: {raw.fullName} <br/>
            <b>Mobileno</b>: {raw.mobileNo} <br/>
            <b>Email</b>: {raw.emailId} <br />
            <b>Address</b>: {raw.address} <br/>
            <b>District</b>: {raw.tehsil} <br/>
            <b>City</b>: {raw.city} <br/>
            <b>State</b>: {raw.state}

            {render_cart_product()}
            <b>Total price</b>: {calc_amount()}
        </div>
      </div>
    </div>
  )
}

export default Confirmorder
