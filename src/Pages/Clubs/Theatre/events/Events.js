 import React from 'react'
import './TheatreEvents.css'
import Event1 from './images/Event1.jpeg'
import Event2 from './images/Event2.jpeg'
import Event3 from './images/Event3.png'
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
       abouts="From mime to stage play,from monologues to stand-up comedy,the theatrical society stands as one of the best performer for the event."
       />
        <Card
       image ={Event2}
       header="Le-fiestus"
       abouts="From mime to stage play,from monologues to stand-up comedy,the theatrical society stands as one of the best performer for the event."
       />
        <Card
       image ={Event3}
       header="Nukkad-Natak"
       abouts="Nukkad in India is not just a word, it is an emotion of people performing to create awareness among the general public on a certain topic."
       />

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;