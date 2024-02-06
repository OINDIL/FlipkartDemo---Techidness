import './Css/Chevron.css'
import React from 'react'

function Chevron(props) {
  let {mouseOver , index, mouseOverLogin} = props;
  return (
    <>
        <div id='chevron' className={mouseOver === index ? `chevron-rotate` : ``}>
            <i className='bx bx-chevron-down'></i>
        </div>
    </>
  )
}

export default Chevron