import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./LatestNews.css";
import LNCard from "./Card/LNCard";
import Diksha from "./Assets/Diksha.jpg";
import LatestNewsJSON from "./LatestNews.json";
import SemesterSportsTournaments from "./Assets/SemesterSportsTournaments.jpg";
import HindiDiwas from "./Assets/HindiDiwas.jpg";
import Parakram from "./Assets/Parakram.png";
import Parakram2 from "./Assets/Parakram2.png";
import SwachhtaPakhwada from "./Assets/SwachhtaPakhwada.png"
import GandhiJayanti from "./Assets/GandhiandShashtriJayanti.png"
import MasterChef from "./Assets/MasterChef.jpg"
import ICIIP from "./Assets/ICIIP.jpg"
import Alumini from "./Assets/AluminiMeet.png"
import SemTournaments1 from "./Assets/SemTournaments1.png"
import Murious from "./Assets/Murious.png"
import EducationalWorkshop from "./Assets/EducationalWorkshop.png"

export default function LatestNews() {
    const Events=[EducationalWorkshop,EducationalWorkshop,Murious,Murious,Murious,Murious,SemTournaments1,SemTournaments1,Alumini,Alumini,ICIIP,ICIIP,MasterChef,Parakram2,Parakram2,Parakram,Parakram,Parakram,Parakram,GandhiJayanti,GandhiJayanti,GandhiJayanti,HindiDiwas,HindiDiwas,SemesterSportsTournaments,SemesterSportsTournaments,Diksha,Diksha,Diksha,SwachhtaPakhwada]
  return (
    <div>
      <Header />
      <div className="event-pages-header" />
      <h2 id="latest-news">Latest News</h2>
      <div className="latest-news-section">
        {LatestNewsJSON.map((event, index) => (
          <LNCard
            key={index}
            img={Events[index]}
            title={event.title}
            date={event.date}
            content={event.content}
            link={event.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
