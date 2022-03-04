 import React from 'react'
import './LitEvents.css'
import l1 from './images/l1.png'
import ll2 from './images/ll2.png'
import l3 from './images/l3.png'
import Card from './Card/Card';

function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
       <Card
       image ={l1}
       header="JUIT-Radio"
       abouts="A fun event with mesmerising poetry, stories from the heartland, and some quirky talks with our RJ’s. So, grab a cup of coffee and join us!!
       We’ve got drama, suspense, mystery, horror and of course, how could we miss out on romance especially in this season."
       />
        <Card
       image ={ll2}
       header="Tark-Sangram"
       abouts="A hindi debating competition , an initiative to spread the awareness of importance of hindi."
       />
        <Card
       image ={l3}
       header="JUIT-Youth-Parliament"
       abouts=" In order to develop democratic ethos in the younger generation JUIT literary club conducts an event called Youth Parliament."
       />

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;