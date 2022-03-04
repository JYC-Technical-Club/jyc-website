import React from 'react'
import './Card.css'

function Card(parse) {
  return (
    <div className='outer-container'>
         <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className = 'event-card-image' src={parse.image}/> 
                </div> 
              <div className='flip-card-back'>
                <h1 className='card-header' >{parse.header}</h1> 
                <p className='card-about'>{parse.abouts}</p> 
                
              </div>
            

          </div>
    </div>
    </div>
    
  );
}

export default Card;