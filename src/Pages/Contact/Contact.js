import React from 'react';
import './Contact.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CCard from './Card/CCard';
export default function Contact() {
  return (
    <div className='contact-page'>
        <Header/>
        <div className='hbg'></div>
        <div className='contact-heading'>
          Contacts  
          <div className='c-underline'></div>
        </div>
        <div className='contact-cards'>
          <CCard
            post='VICE CHANCELLOR'
            CName='Prof. (Dr.) Rajendra Kumar Sharma'
            PHNo='+91 -1792 -239201'
            Email=''
            Purpose=''
          />
          <CCard
            post='REGISTRAR AND DEAN OF STUDENTS'
            CName='Maj Gen Rakesh Bassi (Retd.)'
            PHNo='+91 -1792 -239203, +91 - 8626816777'
            Email='registrar@juit.ac.in'
            Purpose=''
          />
          <CCard
            post='CONTACT DETAILS'
            CName='Mr. Amit Shrivastava'
            PHNo='+91 -1792-239257'
            Email='amitk.shrivastava@juit.ac.in'
            Purpose='Registration, Webkiosk and Fee related query'
          />
          <CCard
            post='CONTACT DETAILS'
            CName='Mr. Arindam Das'
            PHNo='+91 -1792-239379'
            Email='arindam.das@juit.ac.in'
            Purpose='Collection of Grade Sheets, Transcript, Migration Certificate, Provisional Degree Certificate, Character Certificate, All bonafides,Back Ground Check / Credential & Result Verification / Backlog Verification'
          />
          <CCard
            post='CONTACT DETAILS'
            CName='Mr. Dinesh Singh'
            PHNo='+91 -1792-239364'
            Email='dinesh.singh@juit.ac.in'
            Purpose='Caution Money Refund'
          />
          <CCard
            post='CONTACT DETAILS'
            CName='Mr. Sanjay Bhatt'
            PHNo='+91 -1792-239295'
            Email='sanjay.bhatt@juit.ac.in'
            Purpose='Account / Fee related queries'
          />
          <CCard
            post='CONTACT DETAILS'
            CName='Mr. Roshan Lal'
            PHNo='+91 -1792-239297'
            Email='roshan.lal@juit.ac.in'
            Purpose='Digilocker Registration'
          />
          <CCard
            post='CONTACT DETAILS'
            CName='Mr. Chaman Lal'
            PHNo='+91 -1792-239551'
            Email='chaman.lal@juit.ac.in'
            Purpose='Collection of Degree Certificate'
          />
        </div>
        <Footer/>
    </div>
  )
}
