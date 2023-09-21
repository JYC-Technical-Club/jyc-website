import React from 'react';
import './Title.css';
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from './title-images/TMPlogo.png';
function Title (parse) {
    return (
    <div className="title">
        {/* <img className='title-logo' src={logo}/> */}
        <div className="title-text"><h1>{parse.Heading}</h1></div>
        <div className="socials">
            <div className="insta"><FaInstagram/></div>
            <div className="fb"><FaFacebook/></div>
            <div className="twitter"><FaTwitter/></div>
        </div>
    </div>
    );
}

export default Title;
