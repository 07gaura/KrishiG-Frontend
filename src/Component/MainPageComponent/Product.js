import React from 'react'

function Product({item}) {
    var actualPrice = item.actualPrice
    var discount_price = actualPrice*(item.discount/100)
    var final_price = actualPrice-discount_price
  return (
    <div className='col-4 m-1'>
        <div className='col-12'>
            <img src='https://th.bing.com/th/id/OIP.kbr-QB-x8J6TE74JymSwxQHaLH?pid=ImgDet&rs=1'className='image-size h-50'/>
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
       </div>
  )
}
//  <img src='https://th.bing.com/th/id/OIP.kbr-QB-x8J6TE74JymSwxQHaLH?pid=ImgDet&rs=1'className='image-size h-50'/>
//{item.productName}
export default Product
