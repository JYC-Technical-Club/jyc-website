import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Parakram() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=1CLcGY_hroK-4Q7uO1qRVP2KUDfVBF8Wm"
          alt="Parakram"
          title="Parakram"
          date=""
          about="Parakram, a thrilling sports event, brings together universities for competitive matches in football, basketball, volleyball, tennis, and more. Our university hosts the event, attracting students from all over to cheer for their teams. With our university also participating, it creates an electric atmosphere as teams from different universities come together to showcase their skills and sportsmanship."
          img1="https://drive.google.com/uc?export=view&id=1d4LZHLkjui7vTw-nwYFvr3uXJrWcOzsR"
          alt1="Parakram"
          img2="https://drive.google.com/uc?export=view&id=1TVVua5-Uv5VVoGy91CB50pvuhPoximwP"
          alt2="Parakram"
           img3="https://drive.google.com/uc?export=view&id=12O6bwbZQACGMZ-uJs4-97t0_5xTTeSVr"
          alt3="Parakram"
          img4="https://drive.google.com/uc?export=view&id=1mL05OM00t2bkj_0I3uZu4GvbM11mt7oR"
          alt4="Parakram"
          img5="https://drive.google.com/uc?export=view&id=1YQyANMYC12LoC1KcbfXM1FvJmT9UWauk"
          alt5="Parakram"
        />
      </div>
      <Footer/>
    </div>
  );
}
