import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Diksha() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=1JSxzOiBeWAKA2BLKjuo7bBBsVK1fxYb0"
          alt="Movie Night"
          title="Diksha"
          date="Date: 1st October 2022"
          about="Diksha: Embracing New Beginnings is an event exclusively organized for freshers at our college. It fosters a warm and welcoming environment, introducing students to academics, extracurriculars, and campus life. Through interactive sessions, ice-breakers, and workshops, freshers build connections and gain essential skills. The event culminates in a cultural showcase, celebrating their talents. Diksha ignites a sense of belonging and empowers freshers for a remarkable college journey."
          img1="https://drive.google.com/uc?export=view&id=1a2nSPm2lgrRO6Me_0OX9wmEEePmWJg46"
          alt1="Movie Night"
          img2="https://drive.google.com/uc?export=view&id=12BY52K8tSZ-fQ0Zh4smWTpVr3E5Q5kOU"
          alt2="Movie Night"
          img3="https://drive.google.com/uc?export=view&id=1oau63wwJMxY46PexNIWlXbj9fox4lCj2"
          alt3="Movie Night"
          img4="https://drive.google.com/uc?export=view&id=11aXYGdt57Opije6GnW5UEUPsU6UkQiNV"
          alt4="Movie Night"
          img5="https://drive.google.com/uc?export=view&id=1gT4qgLUciHw71JEopPmekblOxtYkjkJc"
          alt5="Movie Night"
        />
      </div>
      <Footer/>
    </div>
  );
}
