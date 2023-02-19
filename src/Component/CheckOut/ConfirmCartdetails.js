import React from 'react'
import {useState} from "react"
import configData from '../../config.json'
function ConfirmCartdetails({item,index,SetCartProduct,get_cart_count_value}) {
  
  //var a = amount+item.actualPrice*item.quantity
  //console.log(typeof(item.actualPrice))
  
  const [quantity, SetQuantity]=useState(item.quantity)
  var q= quantity
  const increaseQuantity=()=>{
    q = quantity+1
    SetQuantity(q)
    update_quantity()
  }

  const decreaseQuantity=()=>{
    q = quantity-1
    SetQuantity(q)
    update_quantity()
  }
  const changeQuantity=(event)=>{
    SetQuantity(event.target.value)
  }
  const remove_from_cart=async()=>{
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };
    const url = "http://"+configData.spring_api+":"+configData.port+"/cart/items/"+item.cpId+"/1"
    const data = await fetch(url, requestOptions)
                 .then(response => response.json())
                 .catch(error => console.log('error', error));
    console.log(data)
    SetCartProduct(data.cartProductResDtoList)
    localStorage.setItem("cart_details",JSON.stringify(data.cartProductResDtoList))
    get_cart_count_value(data.count)
  }
  const update_quantity =async()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "userId":1,
      "productId":item.productId,
      "quantity":q,
      "status":"open"
  });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    const url = "http://"+configData.spring_api+":"+configData.port+"/cart/items"
    const data = await fetch(url, requestOptions)
                 .then(response => response.json())
                 .catch(error => console.log('error', error));
    
    SetCartProduct(data.cartProductResDtoList)
    
  }
  return (
    <div className='col-11 d-flex m-2 cart-block'>
        <div className='col-2 p-1'>{index + 1}</div>
        <div className='col-9 p-1'>
          <div className='col-12 '>{item.productName}</div>
          <div className='col-12 '><b>Amount</b> {item.actualPrice}</div>
          <div className='col-12 d-flex'>
              <div className='col-4'>Quantity: {item.quantity}</div>
          </div>
        </div>
    </div>
  )
}

export default ConfirmCartdetails