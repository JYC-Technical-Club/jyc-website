import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./ClubPageTemplateAbout.css";
import "./ClubPageTemplateTitle.css";
import "./ClubPageTemplateEvents.css";
import { Link } from "react-router-dom";
import EventCarousel from "./EventCarousel";


export default function ClubPageTemplate(parse) {
  return (
    <div>
      <Header />
      {/* Club Landing */}
      <div className="club-landing">
        <img className="club-logo" src={parse.logo} />
        <div className="club-title">
          <h1>{parse.heading}</h1>
        </div>
        <div className="club-socials">
          <Link to="" className="club-insta">
            <FaInstagram />
          </Link>
          <Link to="" className="club-fb">
            <FaFacebook />
          </Link>
          <Link to="" className="club-twitter">
            <FaTwitter />
          </Link>
        </div>
      </div>
      {/* Club About */}
      <div className="club-about">
        <div className="club-about-box">
          <div className="about-the-club">About the Club</div>
          <div className="club-about-text">
            <p>{parse.about}</p>
          </div>
        </div>
      </div>
      {/* Club Events */}
      <div className="club-events">
        <h6>Club Events</h6>
        <EventCarousel
            
        />
      </div>
      <Footer />
    </div>
  );
}
