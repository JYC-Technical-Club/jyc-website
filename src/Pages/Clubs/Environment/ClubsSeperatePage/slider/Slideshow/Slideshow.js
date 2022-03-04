import React from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";

function StudentSlideShow(parse) {
   
  const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaAngleRight />
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaAngleLeft />
        </div>
      );
    };
  
    const [imageIndex, setImageIndex] = useState(0);
  
    const settings = {
      infinite: true,
      lazyLoad: true,
      autoplay:true,
      speed: 300,
      slidesToShow: 2.5,
      centerMode: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
    };
      return (
    <div>
        <Slider {...settings}>
        
        {parse.img.map((img, idx) => (
          <div  className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
            <div className="CoordiName">Coordinator Name</div>
          </div>
        ))}
      </Slider>
      
    </div>
  )
}

export default StudentSlideShow
