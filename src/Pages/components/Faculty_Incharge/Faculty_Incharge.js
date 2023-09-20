import React from 'react';
import './Faculty_Incharge.css'
import Faculty from '../Faculty_Incharge/images/Naveen Jaglan.jpg'


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
          <div className='Faculty_name'>DR. NAVEEN JAGLAN</div>
        </div>
        <div className='coordinator-picture-description'>
          <div className='content'>
            Dr. Naveen Jaglan has been working in Jaypee University of Information Technology (JUIT)
            since March 2017.He obtained B.Tech (Hons.) and M.Tech (Hons.) degrees in Electronics and Communication Engineering from Kurukshetra University, Kurukshetra, India in 2009 and 2011 respectively. He obtained his Ph.D. dissertation entitled “Design and Development of Microstrip Antennas integrated with Electromagnetic Band Gap structures” from Jaypee Institute of Information Technology, Sec-62, Noida, U.P., India in June 2017.
          </div>
          <div className='email-dept'>
            Email: naveen.jaglan@juit.ac.in<br/>
            Department of Electronics and Communication Engineering
          </div>
          <div className='phone'>
            Office: +91 9718092328
          </div>   
        </div>
      </div>
    </div>
  );
}
