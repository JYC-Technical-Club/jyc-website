import React from 'react'
import './JYC_Team.css'
import Member1 from './Card/Member_pictures/Pragya_ JYC_Secretary.jpg'
import Member2 from './Card/Member_pictures/Aditya_Saxena_President_JYC.jpg'
import Member3 from './Card/Member_pictures/Devansh_Gupta_Treasurer.jpg'
import Card from './Card/Card';

export default function JYC_Team() {
  return (
    <div className='JYC-TEAM'>
    <div className='JYC-TEAM-heading'>
        JYC Team
        <div className='jycteam-underline'></div>
    </div>
    <div className='JYC-TEAM-Members'>
      <div className='Member-1'>
      <Card
        img={Member1}
        Name='Pragya Tiwari'
        Post='Secreatry'
        />
      </div>
      <div className='Member-2'>
      <Card
        img={Member2}
        Name='Aditya Saxena'
        Post='President'
        />
      </div>
      <div className='Member-2'>
      <Card
        img={Member3}
        Name='Devansh Gupta'
        Post='Treasurer'
        />
      </div>
    </div>
</div>
    
  );
}
