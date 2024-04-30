import React from "react";
import "./EVENTS.css";
import Card from "../CARDS/CARDS";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import JYCOrientation from "./images/orientation.jpg"
import Diksha from "./images/Diksha.jpg"
import SemTournaments from "./images/SemTournaments.jpg"
import HindiDiwas from "./images/HindiDiwas.jpg"
import Parakram from "./images/Parakram.jpg"
import GarbaNight from "./images/GarbaNight.webp"
import Masterchef from "./images/Masterchef.jpg"
import Alfaaz from "./images/Alfaaz.jpg"
import Murious from "./images/Murious.jpg"
import Dhun from "./images/Dhun.jpg"
import LeFiestus from "./images/LeFiestus.jpg"

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
            img={LeFiestus}
            title="Le Fiestus"
            date=""
            about="Le Fiestus is the annual fest at Jaypee University of Information Technology, serving as a vibrant showcase of diverse art forms, customs, and traditions from across the country."
            link="/le-fiestus"
          />
          <Card
            img={Dhun}
            title="Dhun"
            date=""
            about="DHUN is a music event organised by the Literary and Debating Club of JYC. It serves as a platform for students to participate in a unique singing competition, bringing together members from different choirs to showcase their musical talent and compete."
            link="/dhun"
          />
          <Card
            img={Murious}
            title="Murious"
            date=""
            about="Murious is an annual technical fest organised by the Technical Sciences, movies and Photography club of JYC. The event typically spans multiple days and features a diverse range of technical competitions and activities."
            link="/murious"
          />
          <Card
            img={Alfaaz}
            title="Alfaaz"
            date=""
            about="ALFAAZ is an annual literary extravaganza organised by the Literary and Debating Club of JYC (Jaypee Youth Club). The event spans two days and includes engaging sessions, insightful discussions, and a variety of activities."
            link="/alfaaz"
          />

          <Card
            img={Masterchef}
            title="Master Chef"
            date=""
            about="Master Chef Competition organised by Environment, Health and Ecology Club JYC is a culinary spectacle that captivates the campus."
            link="/master-chef"
          />

          <Card
            img={GarbaNight}
            title="Garba Night"
            date=""
            about="This event is nothing short of a magnificent cultural extravaganza that brings together students and faculty. The atmosphere is transformed into a traditional wonderland with colourful drapes, attendees donned a stunning array of traditional Indian attire."
            link="/garba-night"
          />

          <Card
            img={Parakram}
            title="Parakram"
            date=""
            about="This is an inter college event organised by the sports club of JYC.
            Over the course of the three days, this sporting extravaganza witnesses fierce competition among around 400 talented participants from universities."
            link="/parakram"
          />

          <Card
            img={HindiDiwas}
            title="Hindi Diwas"
            date=""
            about="The essence of Hindi Diwas is brought to life through various activities in this event organised by Literary and debating Club, students exhibit their proficiency in Hindi through various methods including poetry, debates and essays, debate competition is the highlight of the event."
            link="/hindi-diwas"
          />

          <Card
            img={SemTournaments}
            title="Semester Sports Tournaments"
            date=""
            about="The Semester Sports Tournament is organised at JUIT by the sports club of JYC, promoting physical fitness, camaraderie, and healthy competition among students."
            link="/sem-tournaments"
          />
          <Card
            img={Diksha}
            title="Diksha"
            date="16 Sep, 2023"
            about="The Freshers' Events at JUIT are a celebration of new beginnings, forging lifelong connections, and creating unforgettable memories. From the moment you step foot on our picturesque campus, you will be embraced by the warm camaraderie and contagious enthusiasm that defines our vibrant student community."
            link="/diksha"
          />
          <Card
            img={JYCOrientation}
            title="JYC Orientation"
            date="26 Aug, 2023"
            about="Dive into the world of enthusiasm, energy and excitement. Discover the power of unity, creativity and leadership with lifelong friendships and the chance to make a difference."
            link="/jyc-orientation"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EVENTS;
