import React from "react";
import Header from "../../../components/Header/Header";
import Card from "../Card/Card";
import "../EventPages.css";
import JYC_Orientation from "../../EVENTS/images/orientation.jpg";
import Asset1 from "./Assets/orientation1.png";
import Asset2 from "./Assets/orientation2.png";
import Footer from "../../../components/Footer/Footer";
import EPdf from "./Assets/Orientation JYC.pdf"

export default function JYCOrientation() {
  return (
    <div className="event-pages-p">
      <Header />
      <div className="event-pages-header" />
      <Card
        img={JYC_Orientation}
        alt="JYC Orientation"
        title="JYC Orientation"
        date="26 Aug, 2023"
        about="The JYC orientation provides new students with insights into the club's mission, activities, and the vast array of opportunities it offers for personal and social growth. Attendees have the opportunity to hear from various student coordinators of clubs and committees within the Youth Club, gaining valuable insights into the diversity of activities and leadership opportunities available. The event marks the beginning of an exciting journey for both freshers and existing members, as they look forward to active participation in club activities and contributing to the betterment of the university’s community."
        pdf={EPdf}
        img1={Asset1}
        alt1="JYC Orientation"
        img2={Asset2}
        alt2="JYC Orientation"
      />
      <Footer />
    </div>
  );
}
