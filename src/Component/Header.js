import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Header({cart_count}) {
    function sidebarClick(event){
        console.log(document.getElementById("main-div").clientWidth);
        var btnclass = document.getElementById("sidebar")
        btnclass.classList.toggle('active')
       // var contentId = document.getElementById("content")
        //contentId.classList.toggle('active')
        console.log(document.getElementById("sidebar").clientWidth);
        
    }
  return (
    <div className='container oveerflow-auto'>
        <div className='row header-col'>
            <div className='col-3 m-1 my-2'>
            <div class="page-content col-md-1" id="content">
            <button id="sidebarCollapse" type="button" class="btn btn-light bg-whit shadow-sm px-4 mb-4" onClick={sidebarClick}>
                <i class="fa fa-bars mr-2"></i>
            </button>
        </div>
            </div>
            <div className='col-6 m-2 align-middle text-center'>
                Krishi g
            </div>
            <div className='col-1 m-3 align-middle'>
                <Link to="/cart">
                    <i class="fa-solid text-white fa-cart-shopping"></i>
                </Link>
                {cart_count!=0&&<div className='position-absolute top-0 mx-2 my-1  text-center square text-white bg-warning rounded-circle'>{cart_count}</div>}
                
            </div>
        </div>
    </div>
  )
}

export default Header
