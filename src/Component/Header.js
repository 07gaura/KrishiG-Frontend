import React from 'react'

function Header() {
    function sidebarClick(event){
        console.log(document.getElementById("main-div").clientWidth);
        var btnclass = document.getElementById("sidebar")
        btnclass.classList.toggle('active')
       // var contentId = document.getElementById("content")
        //contentId.classList.toggle('active')
        console.log(document.getElementById("sidebar").clientWidth);
        
    }
  return (
    <div className=' container'>
        <div className='row header-col'>
            <div className='col-3 m-2'>
            <div class="page-content col-md-1" id="content">
            <button id="sidebarCollapse" type="button" class="btn btn-light bg-whit shadow-sm px-4 mb-4" onClick={sidebarClick}>
                <i class="fa fa-bars mr-2"></i>
            </button>
        </div>
            </div>
            <div className='col-6 m-2 align-middle text-center'>
                Krishi G
            </div>
            <div className='col-1 m-2 align-middle'>
                <i class="fa-solid text-white fa-cart-shopping"></i>
            </div>
        </div>
    </div>
  )
}

export default Header
