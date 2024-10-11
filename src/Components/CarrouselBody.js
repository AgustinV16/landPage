import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/image1.png';


export default function CarrouselBody() {
  
  return (

    <Carousel className="imageHeight mt-3" data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100 imageHeight"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imageHeight"
          src={image1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imageHeight"
          src={image1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
