import './App.css';
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Header from './Component/Header'
import Search from './Component/MainPageComponent/Search';
import Mainpage from './Component/MainPageComponent/Mainpage';
import { useState,useEffect } from 'react';
import configData from './config.json'
import Cart from './Component/CartPage/Cart';
import Checkoutform  from './Component/CheckOut/Checkoutform';
import Orderplaced from './Component/Orderplaced';

function App() {
  const [cart_count, Set_Cart_Count]= useState(0)
  
  function get_cart_count_value(count_num){
   // var count = cart_count+1
    Set_Cart_Count(count_num)
    //cart_count+=1
  }
  document.addEventListener('click', (e) =>{
    var mouseClickWidth = e.clientX;
    var target_id = e.target.id
    var screen_width = document.getElementById("main-div").clientWidth
    var side_bar_width = document.getElementById("sidebar").clientWidth
    if (side_bar_width<=mouseClickWidth){
      const side_bar_id = document.getElementById("sidebar")
      side_bar_id.classList.remove('active')
    }
  })
  const fetchCartCount = async()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const url = "http://"+configData.spring_api+":"+configData.port+"/cart/count/1"
    const data = await fetch(url, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
      console.log(data)
      Set_Cart_Count(data)
      //console.log("running")
  }

  useEffect(()=>{
    fetchCartCount()
}, [])

  return (
    <div id='main-div'>
    <BrowserRouter>
    <Header cart_count={cart_count} />
    
    <Navbar />
    
      <Routes>
        <Route path="/">
          <Route index element={<Mainpage get_cart_count_value={get_cart_count_value}/>} />
          <Route path='signup' element={<Signup />} />
          <Route path='cart' element={<Cart get_cart_count_value={get_cart_count_value}/>} />
          <Route path='checkout' element={<Checkoutform />} />
          <Route path='order_placed' element={<Orderplaced get_cart_count_value={get_cart_count_value}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
