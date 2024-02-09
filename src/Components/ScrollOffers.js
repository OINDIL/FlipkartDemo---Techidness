import '../Css/ScrollOffers.css'
import React from 'react'

function ScrollOffers() {
  const images = [
    {link:'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg?q=20'},
    {link:'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20'},
    {link:'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d666db78034ac39f.jpg?q=20'},
    {link:'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0d1366a919fff51b.jpg?q=20'},
  ]

  return (
    <>
        <div className="scroll-offers-container">
          <section className="scroll-images-section">
            <div className="arrows">
              <button type='button'>&lt;</button>
              <button type='button'>&gt;</button>
            </div>
            <main className="scrolling-images">
              {images.map((images,index)=>{
                return(
                  <img key={index} src={images.link} alt="" />
                )
              })}
            </main>
          </section>
        </div>
    </>
  )
}

export default ScrollOffers