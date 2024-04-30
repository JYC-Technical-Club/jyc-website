import React from 'react'
import './CARDS.css'
import { animateScroll } from "react-scroll";
import { useLocation, useNavigate, Link } from "react-router-dom";


export default function Card(parse) {
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
    <div>
    <div className='flip-card-events'>
       <div className='flip-card-inner-events'>
         <div className='flip-card-front-events'>
           <img className = 'events-card-image' src={parse.img}/> 
           <div className='background-blur-events'>
                    <div className='eventstitle'>   
                  {parse.title}  
                  </div>
                  <div className='event-date'>  
                     {parse.date}  
                  </div>        
            </div>

           </div> 

         <div className='flip-card-back-events'>
           <h1>{parse.heading}</h1> 
           <p className='events-abt'>{parse.about}</p> 
           <Link className='links'
           onClick={handleScrollToTop}
            to={{
              pathname: parse.link,
              state: { fromDashboard: true }
              }}>Learn More >
          </Link>
         </div>
       

     </div>
</div>
</div>
 );
  }
