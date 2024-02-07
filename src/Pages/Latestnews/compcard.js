import React from 'react';
import '../Contact/Contact.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';

import latestCards from './latest-card';
export default function Contact() {
  return (
    <div className='contact-page'>
        <Header/>
        <div className='hbg'></div>
        <div className='contact-heading'>
          Latest News 
          <div className='c-underline'></div>
        </div>
        <div className='contact-cards'>
    <div className='container mt-5'>
      <div className='card'>
        </div>
    </div>
    
    <div>
      {latestCards.map((card, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <div style={{ flex: '1', maxWidth: '200px' }}>
            <img src={card.imageUrl} alt="Card Image" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ flex: '3' }}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <p><small className="text-medium-emphasis">{card.Date}</small></p>
          </div>
        </div>
      ))}
    </div>



        </div>
        <Footer/>
    </div>
  )
}
