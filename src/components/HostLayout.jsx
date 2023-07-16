import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'


function HostLayout() {

  const activeStyle = {
    fontWeight:"bold",
    textDecoration:"underline",
    color:"#161616"
  }
  return (
    <div className="small-nav">
        <nav className="small-nav-2">
<NavLink end style={(obj)=> obj.isActive ? activeStyle : null} to=".">DashBoard</NavLink>
<NavLink  style={(obj)=> obj.isActive ? activeStyle : null} to="/host/income">Income</NavLink>
<NavLink  style={(obj)=> obj.isActive ? activeStyle : null} to="/host/vans">Vans</NavLink>
<NavLink style={(obj)=> obj.isActive ? activeStyle : null} to="/host/review">Review</NavLink>

       </nav>
       <Outlet/>


    </div>
  )
}

export default HostLayout