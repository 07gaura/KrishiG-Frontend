import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    function sidebarClick(event){
        console.log(document.getElementById("main-div").clientWidth);
        var btnclass = document.getElementById("sidebar")
        btnclass.classList.toggle('active')
       // var contentId = document.getElementById("content")
        //contentId.classList.toggle('active')
        console.log(document.getElementById("sidebar").clientWidth);
        
    }
  return (
    <div>
    <div class="vertical-nav bg-white" id="sidebar">
		<div class="py-4 px-3 mb-4 bg-light">
            <div class="media d-flex align-items-center">
                <img src="images/image.jpg" width="80" height="80" class="mr-3 rounded-circle img-thumbnail shadow-sm" />
                <div class="media-body">
                    <h4 class="m-0">Gaurav</h4>
                    <p class="font-wight-normal text-muted mb-0">Web Developer</p>
                </div>                
            </div>
        </div>
        <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Dashboard</p>
        <ul class="nav flex-column bg-white mb-0">
            <li class="nav-item">
                <Link to="/" class="nav-link text-dark bg-light">
                    <i class="fa-solid fa-house-user  mr-3 text-primary fa-fw"></i>
                    Home
                </Link>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-dark bg-light">
                <i class="fa-solid fa-user mr-3 text-primary fa-fw"></i>
                    Profile
                </a>
            </li>
            
            <li class="nav-item">
                <a href="#" class="nav-link text-dark bg-light">
                <i class="fa-sharp fa-solid fa-mars-double mr-3 text-primary fa-fw"></i>
                    Category
                </a>
            </li>
            
        </ul>
	</div>
    
        
    
    </div>
  )
}

export default Navbar
