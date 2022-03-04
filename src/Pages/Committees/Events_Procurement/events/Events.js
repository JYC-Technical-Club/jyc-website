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
       header="Event 1"
       abouts="Lorem ipsum HAsghutdcfhkm"
       />
        <Card
       image ={Event2}
       header="Event 2"
       abouts="Lorem ipsum garrdgghjgdcnn"
       />
        <Card
       image ={Event3}
       header="Event 3"
       abouts="Lorem ipsum gafsefscbkhbhgfdeg"
       />

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;