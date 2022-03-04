import React from 'react';
import './Landing.css'
import {animateScroll as scroll} from 'react-scroll';
import {Link as LNK} from 'react-scroll';

function Landing() {
  return<div className='landing-page'>
    <div className='head'>
      
    <p className="main-heading">JUIT YOUTH CLUB</p>
    <h2 className="sub-heading">The official governing body of all the events at JUIT.</h2>
    </div>
    <div>
    <button className="latest-events-btn">
      <LNK
        to="latest-events"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >LATEST EVENTS</LNK>
      </button>
    </div>
  </div>;
  
}

export default Landing;
