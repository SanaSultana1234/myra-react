import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/pexels-agafonova-photo-5477855.jpg"
import img2 from "../assets/pexels-jeferson-gomes-6868084.jpg"
import img3 from "../assets/pexels-peng-louis-1643457.jpg"
import img4 from "../assets/pexels-tamara-velazquez-5199158.jpg"


const Services = () => {
    const backgroundImageUrl="../assets/pexels-jeferson-gomes-6868084.jpg";
  return (
    <div className='services'>
    <Carousel className='services' autoPlay infiniteLoop showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
            <img src={img1} alt="Item1"/>
            <p className='legend'>Hair Care</p>
        </div>
        <div>
            <img src={img2} alt="Item2"  />
            <p className='legend'>Makeup</p>
        </div>
        <div> 
            <img src={img3} alt="Item3" />
            <p className='legend'>Pet Care</p>
        </div>
        <div>
            <img src={img4} alt="Item4" />
            <p className='legend'>Spa & Massage</p>
        </div>
    </Carousel>
    </div>
  )
}

export default Services