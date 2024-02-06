import '../Css/Navbar.css'

import React, { useState } from 'react'
import LoginDD from './Dropdowns/LoginDD'
import CustomerSupportDD from './Dropdowns/CustomerSupportDD'
import Chevron from './Dropdowns/Chevron'

function Navbar() {
    const [mouseOverLogin, setMouseOverLogin] = useState(false)
    const [mouseOverDots, setMouseOverDots] = useState(false)

    const handleMouseEnterLogin = () =>{
        setMouseOverLogin(true)
    }
    const handleMouseLeaveLogin = () =>{
        setMouseOverLogin(false)
    }
    const handleMouseEnterDots = () =>{
        setMouseOverDots(true)
    }
    const handleMouseLeaveDots = () =>{
        setMouseOverDots(false)
    }
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="flipkartLogo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder='Search for Products, Brands and More'/>
            </div>
            <div className="login-cart-seller">
                <ul>
                    <li className={mouseOverLogin ? `hover-login-blue` : ``} title='Login' onMouseEnter={handleMouseEnterLogin} onMouseLeave={handleMouseLeaveLogin}>
                        <i className='bx bx-face'></i>
                        <a href="#">Login</a>
                        <Chevron mouseOver={mouseOverLogin}/>
                        {/* <i id="login-chevron-transform" className='bx bx-chevron-down'></i> */}
                    </li>
                    <li>
                        <i className='bx bx-cart'></i>
                        <a href='#'>Cart</a>
                    </li>
                    <li>
                        {/* icon */}
                        <a href='#'>Become a Seller</a>
                    </li>
                    <li onMouseEnter={handleMouseEnterDots} onMouseLeave={handleMouseLeaveDots}>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                </ul>
            </div>
        </nav>
        {mouseOverLogin ? <LoginDD handleMouseEnterLogin={handleMouseEnterLogin} handleMouseLeaveLogin={handleMouseLeaveLogin}/> : console.log()}
        {mouseOverDots ? <CustomerSupportDD handleMouseEnterDots={handleMouseEnterDots} handleMouseLeaveDots={handleMouseLeaveDots}/> : console.log()}
    </div>
  )
}

export default Navbar