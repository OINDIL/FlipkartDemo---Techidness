import './Css/CategoriesDD.css'
import React from 'react'

function CategoriesDD(props) {
    const { mouseOver , dropDown} = props
    return (
        <>
            {mouseOver ?
                (<div id="categories-dd-container" className='fashion'>
                    <ul>
                        {dropDown.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>) : console.log()
            }
        </>
    )
}

export default CategoriesDD