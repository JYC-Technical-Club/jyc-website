import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function SemTournaments() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=1oIeUO4EOqwvhhX-qLPWsCOCE6kuvVbj5"
          alt="Semester Tournament"
          title="Semester Tournament"
          date="Date: 12th March 2021"
          about="Welcome to JUIT (Jaypee University of Information Technology), where the spirit of competition and camaraderie come alive in the exhilarating Semester Tournament, our highly anticipated annual sports extravaganza. This tournament is a thrilling celebration of athleticism, teamwork, and sportsmanship, bringing together students from all disciplines to showcase their skills and passion for sports.The Semester Tournament at JUIT is not just about sports—it's a celebration of athleticism, resilience, and the indomitable spirit of our students. It reinforces the values of discipline, teamwork, and determination, which are integral to success in all aspects of life. Join us in this thrilling annual event and experience the joy of sportsmanship and the power of unity at JUIT."
         img1="https://drive.google.com/uc?export=view&id=1XmHBD7y_5uAYwLWWpG54v6PWm_dhHJID"
          alt1="Semester Tournament"
           img2="https://drive.google.com/uc?export=view&id=1uV_DUJ1uvpqwouQnfnx41vFDcwlaRMNI"
          alt2="Semester Tournament"
          img3="https://drive.google.com/uc?export=view&id=1eEhWQw9JW0LMbnSQGbxeChfPT_gyf8wI"
          alt3="Semester Tournament"
          img4="https://drive.google.com/uc?export=view&id=1RyTFpQ9LhYK5VXGXOOHT9IRxBy7q1YyM"
          alt4="Semester Tournament"
          img5="https://drive.google.com/uc?export=view&id=1XjhP7-IoHUtgSbag6BT79fUN6S6DNM4X"
          alt5="Semester Tournament"
        />
      </div>
      <Footer/>
    </div>
  );
}
