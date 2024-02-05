import './Css/CustomerSupportDD.css'
import React from 'react'

function CustomerSupportDD(props) {
  return (
    <div>
        <div className="cstmr-sprt-dd-container" onMouseEnter={props.handleMouseEnterDots}
        onMouseLeave={props.handleMouseLeaveDots}
        >
            <ul>
                <li>
                    <i className='bx bx-headphone' ></i>
                    <a href="#">Notification Preferences</a>
                </li>
                <li>
                    <i className='bx bx-bell' ></i>
                    <a href="#">24x7 Customer Care</a>
                </li>
                <li>
                    <i className='bx bx-candles'></i>
                    <a href="#">Advertise</a>
                </li>
                <li>
                    <i className='bx bx-download' ></i>
                    <a href="#">Download App</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CustomerSupportDD