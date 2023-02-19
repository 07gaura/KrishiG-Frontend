import React from 'react'
import '../../style.css'
import { useEffect, useState } from 'react'
import configData from '../../config.json'
import Cartdetails from './Cartdetails'
import { Outlet, Link,useNavigate } from "react-router-dom";
function Cart({get_cart_count_value}) {
  const [cartProduct,SetCartProduct]=useState([])
  const [amount, SetAmount] =useState(0)
  const navigate = useNavigate()
  const cart_products =async()=>{
    SetCartProduct([])
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const url = "http://"+configData.spring_api+":"+configData.port+"/cart/product/1"
    const data = await fetch(url, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
      SetCartProduct(data.cartProductResDtoList);
  }
  useEffect(()=>{
    cart_products()
}, [])
  const render_cart_product=() => (
    cartProduct.map((name,index)=>(
      //console.log(name)
      <Cartdetails  item={name} index={index} SetCartProduct={SetCartProduct} get_cart_count_value={get_cart_count_value}/>
    ),[])    
  )
  const calc_amount=()=>{
    let amount=0;
    for(let item of cartProduct){
      amount=amount+item.actualPrice*item.quantity
    }
    return amount
  } 
  const checkout=()=>{
    localStorage.setItem("cart_details",JSON.stringify(cartProduct))
    navigate('/checkout',{replace:true})
  }
  return (
    <div className='container'>
      <div className='row'>
        {render_cart_product()}
      </div>
      <div className='container position-fixed bottom-0 bg-warning start-0 m-1 p-1'>
        <div className='row m-1'>
          <div className='col-8'>
            <b>Total Amount: {calc_amount()}</b> 
          </div>
          <div className='col-3'>
          <button onClick={checkout}  class="btn btn-dark">
            checkout
          </button>
          </div>
        </div>   
      </div>
    </div>
      
  )
}

export default Cart