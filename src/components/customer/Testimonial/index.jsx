import './style.css';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { testimonials } from '../../../utils/dummyData';
import TestimonialCard from '../TestimonialCard';
const Testimonial = ({ id }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  let settings = {
    centerMode: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div id={id} className="testimonial">
      <div className="testimonial-text">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              image={item.image}
              rating={item.rating}
              desc={item.text}
              name={item.name}
              address={item.address}
              age={item.age}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <div className="testi-btn-container">
        <button onClick={previous} className="testi-btn prev">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={next} className="testi-btn next">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
