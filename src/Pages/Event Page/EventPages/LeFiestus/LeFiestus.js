import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function LeFiestus() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=1qjIKrJMVC_VC5OYCtydF4xJSP3iV8emy"
          alt="Le Fiestus"
          title="Le Fiestus"
          date="Date: 27-29 April, 2023 "
          about="Welcome to 'Le Fiestus' – our college's highly anticipated annual fest that promises three unforgettable days filled with boundless energy, exhilarating activities, and mesmerizing performances. From engaging workshops and competitive sports events to captivating cultural showcases and star-studded musical performances, Le Fiestus offers a diverse range of experiences that cater to every interest. So join us as we celebrate the spirit of camaraderie, creativity, and pure excitement, making memories that will last a lifetime. Get ready to immerse yourself in the vibrant atmosphere of Le Fiestus and unleash the true essence of college life."
          img1="https://drive.google.com/uc?export=view&id=1XLHFuRx7CfHFxQLaQDCKjcJuGCs8Or2H"
          alt1="Le Fiestus"
          img2="https://drive.google.com/uc?export=view&id=1SpF9VGJDPxUoW9qQGmnzXQ5fEfFtdbXJ"
          alt2="Le Fiestus"
           img3="https://drive.google.com/uc?export=view&id=1rLQBDX1piKD9d-2tZDm-yG8LhG0kjIsO"
          alt3="Le Fiestus"
          img4="https://drive.google.com/uc?export=view&id=16q6aKBU66jm7KgYDRwNHDO7MRK4jMWud"
          alt4="Le Fiestus"
          img5="https://drive.google.com/uc?export=view&id=1JJEKllwHzshhAhMbtOP1EqrIEbiBgquy"
          alt5="Le Fiestus"
        />
      </div>
      <Footer/>
    </div>
  );
}
