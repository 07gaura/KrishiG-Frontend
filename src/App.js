import './App.css';
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Header from './Component/Header'
import Search from './Component/MainPageComponent/Search';
import Mainpage from './Component/MainPageComponent/Mainpage';

function App() {
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
  return (
    <div id='main-div'>
    <BrowserRouter>
    <Header />
    
    <Navbar />
    
      <Routes>
        <Route path="/">
          <Route index element={<Mainpage />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
