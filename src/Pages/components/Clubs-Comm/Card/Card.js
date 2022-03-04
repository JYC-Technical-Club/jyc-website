import { Link } from 'react-router-dom';
import React from 'react';
import './Card.css';
export default function Card(parse) {
  return (
    <div className='club-card'>
      <img className='club-logo-image' alt="CLUB-LOGO" src={parse.img}/>
      <div className='club-card-content'>
        <div className='club-card-heading'>
          {parse.heading}
        </div>
        <div className='club-card-about'>
          {parse.about}
        </div>
        <span className='learn-more'>
          <Link className='links'
            to={{
              pathname: parse.link,
              state: { fromDashboard: true }
              }}>Learn More >
          </Link>
        </span>
      </div>
    </div>
  );
}