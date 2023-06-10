import React from "react";
import "./EVENTS.css";
import lf from "./images/lf.JPG";
import murious from "./images/murious1.JPG";
import movienight from "./images/movienight.jpeg";
import alfaz from "./images/alfaz.JPG";
import sems from "./images/sems.JPG";
import mchef from "./images/mchef.png";
import diksha from "./images/diksha.JPG";
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
            img={lf}
            title="Le Fiestus"
            date=""
            about="Welcome to 'Le Fiestus' – our college's highly anticipated annual fest that promises three unforgettable days filled with boundless energy, exhilarating activities, and mesmerizing performances."
            link="/le-fiestus"
          />

          <Card
            img={murious}
            title="Murious"
            date=""
            about="Welcome to 'Murious' – our college's highly anticipated annual tech fest that spans three action-packed days dedicated to innovation, technology, and limitless possibilities."
            link="/murious"
          />

          <Card
            img={sems}
            title="Semester Tournament"
            date=""
            about="A tournament which brings together all the sports enthusiasts. From basketball to cricket ,chess to badminton from indoor to outdoors this tournament wraps it all."
            link="/sem-tournaments"
          />

          <Card
            img={alfaz}
            title="Alfaz"
            date=""
            about="The Literary and Debating Club of JUIT Youth Club hosted 'ALFAAZ '22,' a celebration merging literature, art, and culture against the stunning Himalayan backdrop."
            link="/alfaaz"
          />

          <Card
            img={diksha}
            title="Diksha"
            date=""
            about="The Freshers' Events at JUIT are a celebration of new beginnings, forging lifelong connections, and creating unforgettable memories. From the moment you step foot on our picturesque campus, you will be embraced by the warm camaraderie and contagious enthusiasm that defines our vibrant student community."
            link="/diksha"
          />
          <Card
            img={mchef}
            title="Master Chef"
            date=""
            about="An event organized to spread awareness about the importance of health."
            link="/master-chef"
          />
          <Card
            img={mchef}
            title="Parakram"
            date=""
            about="An event organized to spread awareness about the importance of health."
            link="/parakram"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EVENTS;
