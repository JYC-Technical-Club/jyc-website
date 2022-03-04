 import React from 'react'
import './Events.css'
import Event1 from './images/Event1.jpeg'
import Event2 from './images/Event2.jpeg'
import Event3 from './images/Event3.jpeg'
import Card from './Card/Card';

function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
       <Card
       image ={Event1}
       header="Diksha"
       abouts="One of the best cultural nights of JUIT. From nati to bhangra,monologues to full pack drama 'DIKSHA' is a one of its kind fest."
       />
        <Card
       image ={Event2}
       header="Le-Fiestus"
       abouts="From showing best dance moves to dressing up in the best attires, a chance to showcase talent with Bollywood tadka."
       />
        <Card
       image ={Event3}
       header="Athkheliya"
       abouts="From showing best dance moves to dressing up in the best attires, a chance to showcase talent with Bollywood tadka."
       />

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;