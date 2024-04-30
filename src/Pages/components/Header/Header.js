import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import {HashLink as Link} from 'react-router-hash-link';
import "./Header.css";
import logojyc from "./images/logojyc.png";
import { Cross as Hamburger } from 'hamburger-react';
import {Link as LNK} from 'react-scroll';
import { animateScroll } from "react-scroll";
import { useLocation, useNavigate, Link } from "react-router-dom";


function Header() {

  const options = {
    duration: 500,
    smooth: true,
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    animateScroll.scrollToTop(options);
  };

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false)


  const [isOpen1,setIsOpen1]=useState(false)

  const onClickHeader=()=>{
    setIsOpen1(!isOpen1);
  }
  return (
    <div className={header ? "header active" : "header"}>
      <div className={`header-wrapper ${isOpen1 ? 'header-wrapper active':''} `}>
     
          <NavLink to='/' className="header-logojyc">
            <img onClick={'/'} className="header-logo" src={logojyc} />
          </NavLink>
          
          <div onClick={onClickHeader} className="menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
  
        <div className="nav-items">
          <ul>
            <li>
              <Link onClick={() => animateScroll.scrollToTop()} to="/">HOME</Link>
            </li>

            <li>
              <LNK
               to="about-hp"
               spy={true}
               smooth={true}
               offset={-100}
               duration={1000}
               >
                 ABOUT
              </LNK>
            </li>

            <li>
              <Link to="/events" onClick={handleScrollToTop}>EVENTS</Link>
            </li>

            {/* <li>
              <Link to="/page-under-construction">CERTIFICATION</Link>
            </li> */}

            <li>
              <Link to="/contact" onClick={handleScrollToTop}>CONTACT</Link>
            </li>
            <li>
              <Link to="/latest-news" onClick={handleScrollToTop}>LATEST NEWS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
