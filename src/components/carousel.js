import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bannerOne from '../assets/banner3.jpeg';
import bannerTwo from '../assets/banner2.jpeg';
import bannerThree from '../assets/banner1.jpeg';
import bannerFour from '../assets/banner4a.jpeg';

function BannerCarousel() {
  return (
    <React.Fragment>
      <Carousel id="home">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerOne}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerTwo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerThree}
            alt="Third slide"
            height= "756px"
          />

          <Carousel.Caption>
            <h3>Volunteer</h3>
            <p>
            We need great helping hands
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerFour}
            alt="Third slide"
            height= "756px"
          />
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default BannerCarousel;
