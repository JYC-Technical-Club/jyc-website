import React from "react";
import "./EVENTS.css";
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
            img="https://drive.google.com/uc?export=view&id=1GmBhrAJPmk29lHtftFExVCtlPrDdkPmW"
            title="MOVIE Night"
            date=""
            about="When you are at college, you are always looking for simple ways to have fun. Movies are the best stress reliever to be able to just forget about your responsibilities and just relax and have fun."
            link="/movie-night"
          />

          <Card
            img="https://drive.google.com/uc?export=view&id=1GBuTwck52fQkaP463Ese0Jj5BQQLhmVA"
            title="Le Fiestus"
            date=""
            about="Welcome to 'Le Fiestus' – our college's highly anticipated annual fest that promises three unforgettable days filled with boundless energy, exhilarating activities, and mesmerizing performances."
            link="/le-fiestus"
          />

          <Card
            img="https://drive.google.com/uc?export=view&id=1ldy1PsD3tNA5xXM1wTr8YEOxUC6e9EEv"
            title="Murious"
            date=""
            about="Welcome to 'Murious' – our college's highly anticipated annual tech fest that spans three action-packed days dedicated to innovation, technology, and limitless possibilities."
            link="/murious"
          />

          <Card
            img="https://drive.google.com/uc?export=view&id=1B-83WhhsagT6AUXrsmDbWVjEmUSK0duM"
            title="Semester Tournament"
            date=""
            about="A tournament which brings together all the sports enthusiasts. From basketball to cricket ,chess to badminton from indoor to outdoors this tournament wraps it all."
            link="/sem-tournaments"
          />

          <Card
            img="https://drive.google.com/uc?export=view&id=1F5n4FgrDD0D7Eiq2t5z7ukD_pZ8g-9pn"
            title="Alfaz"
            date=""
            about="The Literary and Debating Club of JUIT Youth Club hosted 'ALFAAZ '22,' a celebration merging literature, art, and culture against the stunning Himalayan backdrop."
            link="/alfaaz"
          />

          <Card
            img="https://drive.google.com/uc?export=view&id=1CXgsGXGsihB46UZCE8rUDkCUkirlmSqI"
            title="Diksha"
            date=""
            about="The Freshers' Events at JUIT are a celebration of new beginnings, forging lifelong connections, and creating unforgettable memories. From the moment you step foot on our picturesque campus, you will be embraced by the warm camaraderie and contagious enthusiasm that defines our vibrant student community."
            link="/diksha"
          />
          <Card
            img="https://drive.google.com/uc?export=view&id=1WaMVBglrNbRy1Yh0csWpwzqVF12OKTrc"
            title="Master Chef"
            date=""
            about="An event organized to spread awareness about the importance of health."
            link="/master-chef"
          />
          <Card
            img="https://drive.google.com/uc?export=view&id=1LnfJzVYHZ_safndvF9NS-2tvLm7RC7Eo"
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
