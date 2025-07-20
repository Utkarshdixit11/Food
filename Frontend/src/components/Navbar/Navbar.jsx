import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { assests } from '../../assets/assests';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("home");
  const {getTotalCartAmount,token,setToken}=useContext(StoreContext);

  const navigate=useNavigate();

  const logout=()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
  }

  return (
    <div className='navbar'>
     <Link to="/"><img src={assests.logo} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
      <Link  to="/" onClick={()=>setMenu("home")} className={menu==="home" ? "active" :""}>Home</Link>
      <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" :""}>menu</a>
      <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" :""}>Mobile app</a>
      <a  href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" :""}>Contact us</a>
     </ul>
     <div className="navbar-right">
      <i className="fa-solid fa-magnifying-glass"></i>
      <div className="navbar-search-icon">
      <Link to="/cart" ><i class="fa-solid fa-basket-shopping"></i></Link>
      <div className={getTotalCartAmount()===0? "":"dot"}></div>
      </div>
      {!token? <button className="sign"  onClick={()=>setShowLogin(true)}>Sign in</button>:
      <div className='navbar-profile'>
        <img src={assests.profile_icon} alt=""/>
         
        <ul className="nav-profile-dropdown">
          <li onClick={()=>navigate("/myorders")}><img src={assests.bag_icon} alt=""/><p>Orders</p></li>
          <hr></hr>
          <li onClick={logout}><img src={assests.logout_icon} alt=""/><p>Logout</p></li>
        </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
