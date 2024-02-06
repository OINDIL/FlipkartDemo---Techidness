import '../Css/CategoriesSection.css'
import Chevron from './Dropdowns/Chevron'
import React, { useState } from 'react'

function CategoriesSection() {
    const [mouseOver, setMouseOver] = useState(null)
    const categories = [
        { image: 'https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100', name: 'Grocery', size: { height: 80, width: 80 } },
        { image: 'https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100', name: 'Mobiles', size: { height: 80, width: 80 } },
        { image: 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png', name: 'Fashion', chevron: true, size: { height: 80, width: 80 } },
        { image: 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png', name: 'Electronics', chevron: true, size: { height: 80, width: 80 } },
        { image: 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png', name: 'Home & Furniture', chevron: true, size: { height: 80, width: 80 } },
        { image: 'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100', name: 'Appliances', size: { height: 80, width: 80 } },
        { image: 'https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100', name: 'Travel', size: { height: 80, width: 80 } },
        { image: 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png', name: 'Beauty, Toys & More', chevron: true, size: { height: 80, width: 80 } },
        { image: 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png', name: 'Two Wheelers', chevron: true, size: { height: 80, width: 80 } }
    ]

    const handleMouseOver = (index) => {
        setMouseOver(index)
    }
    const handleMouseLeave = () => {
        setMouseOver(null)
    }
    return (
        <>
            <div className="categories-container">
                <section className="categories-sctn">
                    <ul>
                        {categories.map((item, index) => {
                            return (<li key={index} onMouseEnter={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
                                <div className="image-name">
                                    <img src={item.image} alt="" height={item.size.height + `px`} />
                                    <div className="name-chevron">
                                        <p>{item.name}</p>
                                        {item.chevron ? <Chevron mouseOver={mouseOver} index={index} /> : console.log()}
                                    </div>
                                </div>
                            </li>)
                        })}
                    </ul>
                </section>
            </div>
        </>
    )
}

export default CategoriesSection