import React from "react";
import Card from "../Card/Card";
import MovieNightImg from "./Assets/movienight.jpeg";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../EventPages.css"

export default function MovieNight() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={MovieNightImg}
          alt="Movie Night"
          title="Movie Night"
          date="Date: 12th March 2021"
          about="When you are at college, you are always looking for simple ways to have fun. Movies are the best stress reliever to be able to just forget about your responsibilities and just relax and have fun. So, we bring to you the Movie Night, where you can watch your favourite movies with your friends and have a great time. So, grab your popcorn and get ready for a fun night!"
          img1={MovieNightImg}
          alt1="Movie Night"
          img2={MovieNightImg}
          alt2="Movie Night"
          img3={MovieNightImg}
          alt3="Movie Night"
          img4={MovieNightImg}
          alt4="Movie Night"
          img5={MovieNightImg}
          alt5="Movie Night"
        />
      </div>
      <Footer/>
    </div>
  );
}
