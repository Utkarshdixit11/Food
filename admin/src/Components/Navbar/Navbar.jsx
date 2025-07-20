import React from 'react'
import "./Navbar.css"
import {assests} from "../../assets/assests"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img  className="logo " src={assests.logo} alt="" />
        <img  className="profile " src={assests.profile} alt="" />
        
      
    </div>
  )
}

export default Navbar
