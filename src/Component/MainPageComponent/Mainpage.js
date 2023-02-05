import React, { useState, useEffect } from 'react'
import Search from './Search'
import Slider from './Slider'
import Category from './Category'
import Product from './Product'

function Mainpage() {

    const [categoryId, SetCategoryId] = useState(1)
    const [categoryList, SetCategoryList] = useState([])
    const [productList, SetProductList] = useState([])

    const fetchCategory = async()=>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        const data = await fetch("http://localhost:8089/product/category", requestOptions)
          .then(response => response.json())
          .catch(error => console.log('error', error));
          SetCategoryList(data);
          SetCategoryId(data[0].id)
      }
    
    const fetchProductByCategory = async()=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      const data = await fetch("http://localhost:8089/product/category/"+categoryId, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
        SetProductList(data)
        
    }

    useEffect(()=>{
        fetchCategory()
        fetchProductByCategory()
    }, [])

    const renderCategoryName=() => (
      categoryList.map(name=>(
        <Category  item={name} SetCategoryId = {SetCategoryId}/>
      ))    
    )
    const renderProducts=() => (
      productList.map(name=>(
        //console.log(name)
        <Product  item={name}/>
      ))
    )
  return (
    <div>
      <Search />
      <Slider />
      <div className='container'>
       
        <div className='row p-2'>
          {renderCategoryName()}
        </div>
      </div>
      
        <div className='scroll-row text-center'>
          {renderProducts()}
        </div>
    </div>

  )
}

export default Mainpage
