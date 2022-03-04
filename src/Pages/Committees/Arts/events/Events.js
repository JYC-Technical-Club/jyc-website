 import React from 'react'
import './Events.css'
import Event1 from './images/event1.png'
import dhun from './images/dhun.jpeg'
import Card from './Card/Card';

function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
      
        <Card
       image ={dhun}
       header="DHUN"
       abouts="The musical night of JUIT ,with most attractive musical events of JUIT! "
       />
       

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;