import React from 'react';
import './Card.css'

export default function Card(parse) {
  return (
  <div className='Member-card'> 
  <div className='Member-picture-name'>
    <img className='Member_picture' src={parse.img}/>
    <div className='Member_name'>{parse.Name}</div>
    <div className='Member_post'>{parse.Post}</div>
  </div>
  </div>);
}
