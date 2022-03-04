import React from 'react';
import './TEAMS.css';
import MayankKumar from './images/MayankKumar.jpg';
import Akarshan from './images/Akarshan.jpg';
import HimanshuSharma from './images/HimanshuSharma.jpeg';
import SahilThakur from './images/SahilThakur.jpeg';
import Akshat from './images/Akshat.jpeg';
import Sashwat from './images/Sashwat.jpeg';
import Shivansh from './images/Shivansh.jpeg';
import Abhinandan from './images/Abhinandan.jpeg';
import Shubh from './images/Shubh.jpeg';
import Anuja from './images/Anuja.jpeg';
import Ishita from './images/Ishita.jpeg';
import Prachi from './images/Prachi.jpeg';
import Prakul from './images/Prakul.jpg';
import Ayush from './images/Ayush.jpg';
import image from './images/image.png';
import Yuvika from './images/Yuvika.png';
import Card from '../TEAMS-CARDS/TEAMS-CARDS';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='teams-page'>
      <Header/>
      <div className='teams-head-bg'/>
    <div className='teams'>
        <div className='team-heading'>
          Teams
          <div className='team-heading-underline'/>
        </div>
        <div className= 'container'>
          <Card
         img ={SahilThakur}
         name="Sahil Thakur"
         text="Coordinator"
         instagram='//instagram.com/sahil.thakur.17?utm_medium=copy_link'
         twitter='//twitter.com'
         linkedin='//linkedin.com'/>
          <Card
         img ={Akshat}
         name="Akshat"
         text="Coordinator"
         instagram='//instagram.com/_akshat_akd?utm_medium=copy_link'
         twitter='//twitter.com'
         linkedin='//linkedin.com'/>
         <Card
         img ={Shivansh}
         name="Shivansh Garg"
         text="Coordinator"
         instagram='//instagram.com/whoiscv_?utm_medium=copy_link'
         twitter='//twitter.com'
         linkedin='//linkedin.com'/>
          <Card
         img ={Abhinandan}
         name="Abhinandan Thakur"
         text="Team Lead"
         instagram='//instagram.com/abhinandan.t34?utm_medium=copy_link'
         twitter='//twitter.com'
         linkedin='//linkedin.com'/>
       <Card
       img ={Ishita}
       name="Ishita Gupta"
       text="Team Lead"
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
       <Card
      img ={Anuja}
      name="Anuja Purohit"
      text="Web Dev Team Member"
      instagram='//instagram.com'
      twitter='//twitter.com'
      linkedin='https://www.linkedin.com/in/anuja-purohit-3511b7159/'/>
       <Card
      img ={Yuvika}
      name="Yuvika Dhiman"
      text="Web Dev Team Member"
      instagram='//instagram.com/yuvika_dhiman'
      twitter='//twitter.com/YuvikaDhiman?t=zHaLFPItunThgWh5TPMBZA&s=08'
      linkedin='//www.linkedin.com/in/yuvika-dhiman-45019a232'/>
       <Card
      img ={Prachi}
      name="Prachi Varshney"
      text="UI/UX and Web Dev Team Member"
      instagram='//www.instagram.com/prachivarshney40/'
      twitter='//twitter.com/Prachi211288'
      linkedin='//www.linkedin.com/in/prachi-varshney-273a0622a'/>
       <Card
       img ={MayankKumar}
       name="Mayank Kumar"
       text="UI/UX and Web Dev Team Member"
       instagram='//instagram.com/racinmk?utm_medium=copy_link'
       twitter='//  twitter.com/4n0nym0u5_29?t=XU6CDMVb7X4-LhSg3Jjjtg&s=09'
       linkedin='// www.linkedin.com/in/mayank-kumar-375600214'/>
       <Card
       img ={HimanshuSharma}
       name="Himanshu Sharma"
       text="UI/UX Team Member"
       instagram='//www.instagram.com/himanshu.shrma_'
       twitter='//twitter.com/HimanshuShrma19?t=rtRhfCW6gqtrznssws-Wag&s=08'
       linkedin='/teams'/>
        <Card
       img ={Akarshan}
       name="Akarshan Singh"
       text="UI/UX and Web Dev Team Member"
       instagram='//www.instagram.com/_aakarshan_22__/'
       twitter='//twitter.com/aakarshan221003'
       linkedin='//www.linkedin.com/in/aakarshan-singh-2b076a228/'/>
        <Card
       img ={Shubh}
       name="Shubh"
       text="UI/UX and Web Dev Team Member"
       instagram='//www.instagram.com/_shubh.28/'
       twitter='//twitter.com/Shubh26045994'
       linkedin='/teams'/>
        <Card
       img ={Prakul}
       name="Prakul Chauhan"
       text="UI/UX and Web Dev Team Member"
       instagram='//www.instagram.com/prakul.rar'
       twitter='/teams'
       linkedin='/teams'/>
        <Card
       img ={Ayush}
       name="Ayush"
       text="UI/UX and Web Dev Team Member"
       instagram='//www.instagram.com/aayusshhh_22/'
       twitter='//twitter.com/AayushG34713573'
       linkedin='//www.linkedin.com/in/aayush-gupta-2ba611233/'/>
        <Card
       img ={Sashwat}
       name="Sashwat Srivastava"
       text="UI/UX and Web Dev Team Member"
       instagram='//www.instagram.com/shashwatsrii/'
       twitter='https://mobile.twitter.com/shashwatt6302'
       linkedin='//www.linkedin.com/in/shashwat-srivastava-8a2200227/'/>
       </div>
    </div>
    <Footer/>
    </div>
  );
}

export default EVENTS;