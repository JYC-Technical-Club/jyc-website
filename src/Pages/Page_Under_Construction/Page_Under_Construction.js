import React from 'react';
import './Page_Under_Const.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
export default function Page_Under_Construction() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='page-under-construction'>
      <div className='page-above-uc'>
      <Header/>
      <div className='under-const-section'>
        <div className='top-text'>
            <div className='side-line'/>
            OUR NEW PAGE
            <div className='side-line'/>
        </div>
        <div className='under-const'>
          <div className='under'>
          UNDER  
          </div>
          <div className='const'>
            CONSTRUCTION
          </div>
        </div>
        <div className='progress-bar'>
          <div className='progress-completed'></div>
        </div>
        <div className='progress'>
          <div>0%</div>
          <div>50%</div>
          <div>100%</div>
        </div>
        <div className='socials-uc'>
          <Link to='//www.google.com'><i class="fab fa-facebook"></i></Link>
          <Link to='//www.google.com'><i class="fab fa-instagram"></i></Link>
          <Link to='//www.google.com'><i class="fab fa-linkedin"></i></Link>
          <Link to='//www.google.com'><i class="fab fa-twitter"></i></Link>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  );
}
