import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import lf from "./Assets/lf.JPG";

export default function MasterChef() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={lf}
          alt="Le Fiestus"
          title="Le Fiestus"
          date="Date: 27-29 April, 2023 "
          about="Welcome to 'Le Fiestus' – our college's highly anticipated annual fest that promises three unforgettable days filled with boundless energy, exhilarating activities, and mesmerizing performances. From engaging workshops and competitive sports events to captivating cultural showcases and star-studded musical performances, Le Fiestus offers a diverse range of experiences that cater to every interest. So join us as we celebrate the spirit of camaraderie, creativity, and pure excitement, making memories that will last a lifetime. Get ready to immerse yourself in the vibrant atmosphere of Le Fiestus and unleash the true essence of college life."
          img1={lf}
          alt1="Le Fiestus"
          img2={lf}
          alt2="Le Fiestus"
           img3={lf}
          alt3="Le Fiestus"
          img4={lf}
          alt4="Le Fiestus"
          img5={lf}
          alt5="Le Fiestus"
        />
      </div>
      <Footer/>
    </div>
  );
}
