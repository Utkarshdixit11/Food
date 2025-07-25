import React from 'react'
import "./Sidebar.css"
import { assests } from '../../assets/assests'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assests.add_icon} alt="" />
          <p>Add Items</p>
         </NavLink>
         <NavLink to="/list" className="sidebar-option">
          <img src={assests.order_icon} alt="" />
          <p>List Item</p>
         </NavLink>
         <NavLink to="/order" className="sidebar-option">
          <img src={assests.order_icon} alt="" />
          <p>Orders</p>
         </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
