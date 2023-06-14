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
       image ="https://drive.google.com/uc?export=view&id=1XjhP7-IoHUtgSbag6BT79fUN6S6DNM4X"
       header="SEMESTER-TOURNAMENT"
       abouts="A tournament which brings together all the sports enthusiasts. From basketball to cricket ,chess to badminton from indoor to outdoors this tournament wraps it all. "
            />
        
<Card
        image ="https://drive.google.com/uc?export=view&id=1mL05OM00t2bkj_0I3uZu4GvbM11mt7oR"
        header="Parakram"
        abouts="Parakram, a thrilling sports event, brings together universities for competitive matches in football, basketball, volleyball, tennis, and more. "
         
              
              
          />
        </div>

    </div>
  
    
  );
}

export default Events;