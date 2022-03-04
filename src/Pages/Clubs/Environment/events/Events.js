 import React from 'react'
import './Events.css'
import Ones from './images/Ones.png'
import one from './images/one.png'

import Card from './Card/Card';

function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
       <Card
       image ={Ones}
       header="WE-CARE"
       abouts="WE-CARE an event organized by the Environment club in coordination with the Omega- Leo club , to create awareness amongst the youngsters and teenagers about tree plantation ,importance of trees for life and much more. "
       />
        <Card
       image ={one}
       header="Master-Chef"
       abouts="An event organized to spread awareness about the importance of health."
       />
        <Card
       image ={Ones}
       header="WE-CARE"
       abouts="WE-CARE an event organized by the Environment club in coordination with the Omega- Leo club , to create awareness amongst the youngsters and teenagers about tree plantation ,importance of trees for life and much more."
       />

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;