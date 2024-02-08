import './Css/CategoriesDD.css'
import React from 'react'

function CategoriesDD(props) {
    const { mouseOver , dropDown} = props
    // console.log(mouseOver);
    return (
        <>
            {mouseOver ?
                (<div id="categories-dd-container" className={mouseOver === 2 ? `fashion` : mouseOver === 3 ? 'electronics' :mouseOver === 4 ? `home-furniture`: mouseOver  === 7 ? `beauty-toys`: `two-wheelers`}>
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