import './Css/Chevron.css'
import React from 'react'

function Chevron(props) {
  return (
    <>
        <div id='chevron' className={props.mouseOver ? `chevron-rotate` : ``}>
            <i className='bx bx-chevron-down'></i>
        </div>
    </>
  )
}

export default Chevron