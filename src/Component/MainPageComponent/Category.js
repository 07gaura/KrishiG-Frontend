import React, { useEffect, useState } from 'react'
import { CButton } from '@coreui/react'

function Category({item, SetCategoryId}) {
  function changeCategoryId(){
    console.log(item.id)
    SetCategoryId(item.id)
  }
  return (
    <div className='col-6'>
        <button className="btn btn-warning col-12" color="warning" shape="rounded-pill"  onClick={changeCategoryId}>{item.name}</button>
    </div>
  )
}

export default Category
