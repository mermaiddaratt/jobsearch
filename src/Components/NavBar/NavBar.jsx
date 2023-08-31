import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return(
    <div className='navBar flex justify-between items-center p-[3rem]'>
    <div className="logoDiv">
      <a href='/' className="logo text-[25px] text-blue-900">
        <strong>FindJob</strong><small className="ml-1 text-base">by ME</small></a>
    </div>

    <div className="menu flex gap-8">
      <Link to='/Jobs' className="menulist text-[#6f6f6f] hover:text-blueColor">Jobs</Link>
      <Link to='/Companies' className="menulist text-[#6f6f6f] hover:text-blueColor">Companies</Link>
      <Link to='/About' className="menulist text-[#6f6f6f] hover:text-blueColor">About</Link>
      <Link to='/Contact' className="menulist text-[#6f6f6f] hover:text-blueColor">Contact</Link>
      <Link to='/Login' className="menulist text-[#6f6f6f] hover:text-blueColor">Login</Link>
      <Link to='/Account' className="menulist text-[#6f6f6f] hover:text-blueColor">Account</Link>
    </div>
  </div>
  )
}

export default NavBar
