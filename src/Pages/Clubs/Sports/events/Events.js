 import React from 'react'
import './Events.css'

import sems from './images/sems.jpeg'
import Card from './Card/Card';

function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
      
        <Card
       image ={sems}
       header="SEMESTER-TOURNAMENT"
       abouts="A tournament which brings together all the sports enthusiasts. From basketball to cricket ,chess to badminton from indoor to outdoors this tournament wraps it all. "
            />
        

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;