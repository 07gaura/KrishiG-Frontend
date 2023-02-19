import React, { useEffect, useState } from 'react'
import { CButton } from '@coreui/react'

function Category({item,fetchProductByCategory}) {
  var [count, SetCount]=useState(1)
  const changeCategoryId=()=>{
    fetchProductByCategory(item.id)
  }
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  return (
    <div className='col-6'>
        <button className="btn btn-warning col-12" color="warning" shape="rounded-pill"  onClick={changeCategoryId}>{item.name}{item.id}</button>
    </div>
  )
}

export default Category
