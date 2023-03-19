import React from 'react'
import './JYC_Team.css'
import Aditya from './Card/Member_pictures/aditya_sharma.JPG'
import Angel from './Card/Member_pictures/angel_singh.JPG'
import Archit from './Card/Member_pictures/archit_kaushal.JPG'
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
        img={Aditya}
        Name='Aditya Sharma'
        Post='Secreatry'
        />
      </div>
      <div className='Member-2'>
      <Card
        img={Angel}
        Name='Angel Singh'
        Post='President'
        />
      </div>
      <div className='Member-2'>
      <Card
        img={Archit}
        Name='Archit Kaushal'
        Post='Treasurer'
        />
      </div>
    </div>
</div>
    
  );
}
