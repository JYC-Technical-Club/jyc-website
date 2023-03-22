import React from 'react';
import './Eventcard.css';   
import {Link} from 'react-router-dom'

export default function Eventcard(parse) {  
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
            to={{
              pathname: parse.link,
              state: { fromDashboard: true }
              }}>Learn More >
        </Link>
       
      </div>
    </div>
  );
}
