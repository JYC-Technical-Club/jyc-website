import React from "react";
import "./EVENTS.css";
import uiux from "./images/uiux.jpeg";
import Photowalk from "./images/Photowalk.jpeg";
import movienight from "./images/movienight.jpeg";
import radio from "./images/radio.jpeg";
import sems from "./images/sems.jpeg";
import mchef from "./images/mchef.png";
import wecare from "./images/wecare.png";
import Card from "../CARDS/CARDS";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="event-page">
      <Header />
      <div className="events-head-bg"></div>
      <div className="events-jyc">
        <div className="events-heading">
          Events
          <div className="eventsheading-u" />
        </div>
        <div className="events-container">
          {/* EVENT 6 */}
          <Card
            img={movienight}
            title="MOVIE Night"
            date=""
            about="When you are at college, you are always looking for simple ways to have fun. Movies are the best stress reliever to be able to just forget about your responsibilities and just relax and have fun."
            link="/movie-night"
          />

          <Card
            img={uiux}
            title="UI/UX and Web Dev Bootcamp"
            date=""
            about="When building a website, the UI/UX designer determines what the team should build and what the website should do & the developers make the website work and functionable."
            link="/"
          />

          <Card
            img={Photowalk}
            title="Photowalk"
            date=""
            about="Photowalking is a communal activity of camera enthusiasts who gather in a group to walk around with a camera for the main purpose of taking pictures of things that interest them."
            link="/"
          />

          <Card
            img={sems}
            title="Semester Tournament"
            date=""
            about="A tournament which brings together all the sports enthusiasts. From basketball to cricket ,chess to badminton from indoor to outdoors this tournament wraps it all."
            link="/"
          />

          <Card
            img={radio}
            title="JUIT Radio"
            date=""
            about="Bored of being bored because being bored is boring. 'Radio' Presented by JYC's Literary and Debating Club."
            link="/"
          />

          <Card
            img={wecare}
            title="We-Care"
            date=""
            about="WE-CARE an event organized by the Environment club in coordination with the Omega- Leo club , to create awareness amongst the youngsters and teenagers about tree plantation ,importance of trees for life and much more."
            link="/"
          />
          <Card
            img={mchef}
            title="Master Chef"
            date=""
            about="An event organized to spread awareness about the importance of health."
            link="/"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EVENTS;
