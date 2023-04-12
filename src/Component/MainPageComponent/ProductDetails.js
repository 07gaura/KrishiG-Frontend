import React from 'react'

function ProductDetails() {
    console.log("product page open")
  return (
    <div className=''>
        <div className="row display ">
            <div className="col-md-12">
                <img src='https://th.bing.com/th/id/OIP.kbr-QB-x8J6TE74JymSwxQHaLH?pid=ImgDet&rs=1' className='image-size-100'/>
            </div>
            <div className="col-8 m-1">
                Product Title<br/>
                Category
            </div>
            <div className="col-2 m-1">
                <p className='text-right '>
                    <div className="cut">
                        price
                    </div>
                    <div>price</div>
                </p>
                
            </div>
            <div className="col-12 ">
            <button type="button" class="btn btn-warning col-10 mx-4">Warning</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails