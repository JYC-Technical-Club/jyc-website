import React from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";

const style1 ={
  Head:{
      top: '5%',
      width:'100%',
      align: 'center',
      textAlign : 'underline #E9B456 5px ',
      marginBottom: '3%',
      fontSize: '4rem',
      color:'#443E58',
  }
}
function PhotogallerySlideShow(parse) {
   
  const NextArrow = ({ onClick }) => {
      return (
        <div className="arrows forward" onClick={onClick}>
          <FaAngleRight />
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrows previous" onClick={onClick}>
          <FaAngleLeft />
        </div>
      );
    };
  
    const [image, setImage] = useState(0);
  
    const settings = {
      infinite: true,
      lazyLoad: true,
      autoplay:true,
      speed: 300,
      slidesToShow: 2.5,
      centerMode: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImage(next),
    };
      return (
    <div>
        <Slider {...settings}>
        
        {parse.img.map((img, idx) => (
          <div style={style1} className={idx === image ? "slide activeSlide" : "slide"}>
            <img id='GalleryImages' src={img} alt={img} />
        
          </div>
        ))}
      </Slider>
      
    </div>
  )
}

export default PhotogallerySlideShow;