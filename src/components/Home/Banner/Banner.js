import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpeg'
import banner2 from '../../../images/banner/banner2.jpeg'
const Banner = () => {
    return (
        <div>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className='d-flex flex-column justify-content-center align-items-center h-100'>
      <h1 className='fs-1 fw-bold text-info'>Historic Landmarks</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className='d-flex flex-column justify-content-center align-items-center h-100'>
    <h1 className='fs-1 fw-bold text-info'>Travel And Adventure</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;