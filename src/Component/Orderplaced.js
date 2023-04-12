import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
function Orderplaced({get_cart_count_value}) {
    const [order_id,setOrderId]=useState("")

    const show_order_id=()=>{
        get_cart_count_value(0)
        localStorage.removeItem("cart_details")
        const param = new URLSearchParams(document.location.search)
        const s = param.get("order_id")
        setOrderId(s) 
    }
    useEffect(()=>{
        show_order_id()
    }, [])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 position-absolute top-50 start-50 translate-middle text-center'>
        <i class="fa-solid fa-circle-check text-warning icon-font-size"></i><br/>
        <b>Thanks for ordering, your order is placed and order number is {order_id}.</b><br/>
        You will be redirected in few seconds or <Link to="/">click here</Link> to redirect
        </div>
      </div>
    </div>
  )
}

export default Orderplaced
