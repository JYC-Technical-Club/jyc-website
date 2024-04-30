import React from 'react';
import './Eventcard.css';   
import { animateScroll } from "react-scroll";
import { useLocation, useNavigate, Link } from "react-router-dom";


export default function Eventcard(parse) {  
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
    <div className='event-card-ue'>  
      <img className='event-image-ue' src={parse.img}/>   
      <div className='event-content-ue'>   
        <div className='event-heading-ue'>  
          {parse.heading}  
        </div>
        {/* <div className='event-date-ue'>   
          {parse.date}   
        </div> */}
        <div className='event-about-ue'>   
          {parse.about}   
        </div>

        <Link className='event-links'
        onClick={handleScrollToTop}
            to={{
              pathname: parse.link,
              state: { fromDashboard: true }
              }}>Learn More >
        </Link>
       
      </div>
    </div>
  );
}
