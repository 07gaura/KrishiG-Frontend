import React from 'react'
import configData from '../../config.json'

function Product({item,get_cart_count_value}) {
    var actualPrice = item.actualPrice
    var discount_price = actualPrice*(item.discount/100)
    var final_price = actualPrice-discount_price

    const add_to_cart =async()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "userId":1,
        "productId":item.id,
        "quantity":1,
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
      get_cart_count_value(data.count)

    }
  return (
    <div className='col-4 m-1'>
        <div className='col-12'>
            <img src='https://th.bing.com/th/id/OIP.kbr-QB-x8J6TE74JymSwxQHaLH?pid=ImgDet&rs=1'className='image-size'/>
        </div>
        <div className='col-12'>
            {item.productName}
        </div>
        <div className='col-12'>
           Actual price {item.actualPrice}
        </div>
        <div className='col-12'>
           discount {item.discount}
        </div>
        <div className='col-12'>
           offer price {final_price}
        </div>
        <div className='col-12'>
          <button className="btn btn-warning col-12" color="warning" onClick={add_to_cart} shape="rounded-pill" >Add to Cart</button>
        </div>
       </div>
  )
}
//  <img src='https://th.bing.com/th/id/OIP.kbr-QB-x8J6TE74JymSwxQHaLH?pid=ImgDet&rs=1'className='image-size h-50'/>
//{item.productName}
export default Product
