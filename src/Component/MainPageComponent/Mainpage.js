import React, { useState, useEffect } from 'react'
import Search from './Search'
import Slider from './Slider'
import Category from './Category'
import Product from './Product'
import configData from '../../config.json'

function Mainpage({get_cart_count_value}) {

    //var [categoryId, SetCategoryId] = useState(1)
    const [categoryList, SetCategoryList] = useState([])
    const [productList, SetProductList] = useState([])

    const fetchCategory = async()=>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        const url = "http://"+configData.spring_api+":"+configData.port+"/product/category"
        const data = await fetch(url, requestOptions)
          .then(response => response.json())
          .catch(error => console.log('error', error));
          SetCategoryList(data);
      }
    
    const fetchProductByCategory = async(categoryId)=>{
      SetProductList([])
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const url = "http://"+configData.spring_api+":"+configData.port+"/product/category/"+categoryId
      const data = await fetch(url, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
        console.log(data)
        SetProductList(data)
        //console.log("running")
        renderProducts()
    }

    

    useEffect(()=>{
        fetchCategory()
        fetchProductByCategory(1)
    }, [])

    const renderCategoryName=() => (
      categoryList.map(name=>(
        <Category  item={name} fetchProductByCategory={fetchProductByCategory}/>
      ))    
    )
    const renderProducts=() => (
      //console.log(productList)
      productList.map(name=>(
        <Product  item={name} get_cart_count_value={get_cart_count_value} />
      ))
    )
  return (
    <div className=''>
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
        <div className='scroll-row text-center'>
          {renderProducts()}
        </div>
    </div>

  )
}

export default Mainpage
