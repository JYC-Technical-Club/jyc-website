import React from "react";
import image1 from "./image/LeFiestus.jpg";
import image2 from "./image/Dhun.jpg";
import image3 from "./image/Murious.jpg";
import "./Card1.css";
import Eventcard from "./Eventcard";
import { animateScroll } from "react-scroll";
import { useLocation, useNavigate, Link } from "react-router-dom";


export default function Card1() {
  const options = {
    duration: 500,
    smooth: true,
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    animateScroll.scrollToTop(options);
  };
  return (
    <div className="cards-ue">
      <div className="card-ue">
        <Eventcard
          img={image1}
          heading="Le Fiestus"
          // date='2024'
          about="Annual fest that promises three unforgettable days filled with boundless energy, exhilarating activities, and mesmerizing performances."
          link="/le-fiestus"
        />
      </div>
      <div className="card-ue">
        <Eventcard
          img={image2}
          heading="Dhun"
          // date='2022'
          about="DHUN'24, a highly anticipated musical evening and DJ night."
          link="/dhun"
        />
      </div>
      <div className="card-ue">
        <Eventcard
          img={image3}
          heading="Murious 18.0"
          // date='2022'
          about="A three-day extravaganza brimming with technological innovation, creative expression, and spirited competition."
          link="/murious"
        />
      </div>
      <Link className='all-events' onClick={handleScrollToTop} to="/events">See All Events...</Link>
    </div>
  );
}
