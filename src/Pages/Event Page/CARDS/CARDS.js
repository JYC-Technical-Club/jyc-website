import React from 'react'
import './CARDS.css'
export default function Card(parse) {
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
           
         </div>
       

     </div>
</div>
</div>
 );
  }
