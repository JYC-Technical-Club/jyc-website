 import React from 'react'
import './Events.css'
import m from './images/m.jpeg'
import Card from './Card/Card';
import Photowalk from './images/Photowalk.jpeg';
import uiux from './images/uiux.jpeg';


function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
      
        <Card
       image ="https://drive.google.com/uc?export=view&id=18GVJWuXhV75QskRoBYrS_t5rQaa687DI"
       header="Murious"
       abouts="The two days panorama' will be a massive spectacle of technical events and shows, as well as outstanding brain demos, with entertaining events like Click and Blink, Spot the Bug, Web Wizard, Valorant, Tech Talks, Code Quest, and Code Trails."
       />
        <Card
       image ={uiux}
       header="UI/UX and Web Dev Bootcamp"
       abouts="When building a website, the UI/UX designer determines what the team should build and what the website should do & the developers make the website work and functionable."
       />
        <Card
       image ={Photowalk}
       header="Photowalk"
       abouts="Photowalking is a communal activity of camera enthusiasts who gather in a group to walk around with a camera for the main purpose of taking pictures of things that interest them."
       />
        

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;