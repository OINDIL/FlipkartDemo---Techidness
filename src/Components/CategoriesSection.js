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

    const Fashion_DD_data = [
        {name:`Men's Top Wear`,link:'#link'},
        {name:`Men's Bottom Wear`,link:'#link'},
        {name:`Women Ethnic`,link:'#link'},
        {name:`Women Western`,link:'#link'},
        {name:`Men Footwear`,link:'#link'},
        {name:`Women Footwear`,link:'#link'},
        {name:`Watches and Accessories`,link:'#link'},
        {name:`Bags, Suitcases & Luggage`,link:'#link'},
        {name:`Kids`,link:'#link'},
        {name:`Essentials`,link:'#link'},
        {name:`Winter`,link:'#link'}
    ]
    const Electronics_DD_data = [
        {name:`Audio`,link:'#link'},
        {name:`Electronics GST Store`,link:'#link'},
        {name:`Computer Peripherals`,link:'#link'},
        {name:`Gaming`,link:'#link'},
        {name:`Health & Personal Care`,link:'#link'},
        {name:`Laptop Accessories`,link:'#link'},
        {name:`Laptop and Desktop`,link:'#link'},
        {name:`MobileAccessory`,link:'#link'},
        {name:`Powerbank`,link:'#link'}
    ]
    
    const HomeFurniture_DD_data = [
        {name:`Home Furnishings`,link:'#link'},
        {name:`Furniture Studio`,link:'#link'},
        {name:`Living Room Furniture`,link:'#link'},
        {name:`Kitchen & Dining`,link:'#link'},
        {name:`Bedroom Furniture`,link:'#link'},
        {name:`Space Saving Furniture`,link:'#link'}
    ]
    const BeautyToys_DD_data = [
        {name:`Beuty & Personal Care`,link:'#link'},
        {name:`Men's Grooming`,link:'#link'},
        {name:`Food & Drinks`,link:'#link'},
        {name:`Nutrition & Health Care`,link:'#link'},
        {name:`Baby Care`,link:'#link'}
    ]
    const TwoWheelers_DD_data = [
        {name:`Petrol Vehicles`,link:'#link'},
        {name:`Electric Vehicles`,link:'#link'}
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