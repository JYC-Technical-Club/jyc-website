import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Diksha1 from "./Assets/diksha.JPG";
import Diksha2 from "./Assets/diksha1.JPG";
import Diksha3 from "./Assets/diksha2.JPG";
import Diksha4 from "./Assets/diksha3.JPG";
import Diksha5 from "./Assets/diksha4.JPG";
import Diksha6 from "./Assets/diksha5.JPG";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Diksha() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={Diksha1}
          alt="Movie Night"
          title="Diksha"
          date="Date: 1st October 2022"
          about="Diksha: Embracing New Beginnings is an event exclusively organized for freshers at our college. It fosters a warm and welcoming environment, introducing students to academics, extracurriculars, and campus life. Through interactive sessions, ice-breakers, and workshops, freshers build connections and gain essential skills. The event culminates in a cultural showcase, celebrating their talents. Diksha ignites a sense of belonging and empowers freshers for a remarkable college journey."
          img1={Diksha1}
          alt1="Movie Night"
          img2={Diksha2}
          alt2="Movie Night"
          img3={Diksha3}
          alt3="Movie Night"
          img4={Diksha4}
          alt4="Movie Night"
          img5={Diksha5}
          alt5="Movie Night"
        />
      </div>
      <Footer/>
    </div>
  );
}
