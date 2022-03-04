import React from 'react';
import './Faculty_Incharge.css'
import Faculty from './images/Faculty_picture.png'


export default function Faculty_Coordinator() {
  return(
    <div className='Faculty-Coordinator'>
      <div className='faculty-coordinator-heading'>
        <div>Faculty Incharge</div>
        <div className='fi-underline'></div>
      </div>  
      <div className='faculty-coordinator-content'>
        <div className='coordinator-picture-name'>
          <img className='Faculty_picture' src={Faculty}/>
          <div className='Faculty_name'>DR. AMIT SRIVASTAVA</div>
        </div>
        <div className='coordinator-picture-description'>
          <div className='content'>
            Dr. Amit Srivastava has been working in Jaypee University of Information Technology (JUIT)
            since July 2003. He holds a PhD in Management from JUIT and M.Phil (International Business)
            from Alagappa University. He did his MBA (Master of International Business Administration)
            from Banaras Hindu University.
          </div>
          <div className='email-dept'>
            Email: amit.srivastava@juit.ac.in<br/>
            Department of Humanities and Social Science
          </div>
          <div className='phone'>
            Office: +91 9418109766
          </div>   
        </div>
      </div>
    </div>
  );
}
