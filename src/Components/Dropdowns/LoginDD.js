import React from 'react'
import './Css/LoginDD.css'
function LoginDD() {
  return (
    <div>
        <div className="dropdown-container">
            <div className="new-customer-sgnup">
                <a href='#'>New Customer?</a>
                <a href='#'>Sign Up</a>
            </div>
            <div className="rest-of-lists">
                <ul>
                    <li>
                        <i className='bx bx-face'></i>
                        <a href='#'>My Profile</a>
                    </li>
                    <li>
                        <i className='bx bx-plus-circle'></i>
                        <a href='#'>TechidCart Plus Zone</a>
                    </li>
                    <li>
                        <i className='bx bx-package'></i>
                        <a href='#'>Orders</a>
                    </li>
                    <li>
                        <i className='bx bx-heart'></i>
                        <a href='#'>Wishlist</a>
                    </li>
                    <li>
                        <i className='bx bx-gift' ></i>
                        <a href='#'>Rewards</a>
                    </li>
                    <li>
                        <i className='bx bx-credit-card-alt' ></i>
                        <a href='#'>Gift Cards</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default LoginDD