import '../Css/Navbar.css'

import React from 'react'
import LoginDD from './Dropdowns/LoginDD'
import CustomerSupportDD from './Dropdowns/CustomerSupportDD'

function Navbar() {
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
                    <li title='Login'>
                        <i className='bx bx-face'></i>
                        <a href="#">Login</a>
                        <i id="login-chevron-transform" className='bx bx-chevron-down'></i>
                    </li>
                    <li>
                        <i className='bx bx-cart'></i>
                        <a href='#'>Cart</a>
                    </li>
                    <li>
                        {/* icon */}
                        <a href='#'>Become a Seller</a>
                    </li>
                    <li>
                        {/* 3 dots */}
                        <i class='bx bx-dots-vertical-rounded'></i>
                    </li>
                </ul>
            </div>
        </nav>
        <LoginDD/>
        <CustomerSupportDD/>
    </div>
  )
}

export default Navbar