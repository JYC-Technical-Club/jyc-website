import React from 'react'
import Header from '../../../components/Header/Header'
import Card from '../Card/Card'
import Footer from '../../../components/Footer/Footer'
import HindiD from "../../EVENTS/images/HindiDiwas.jpg"
import HindiDP from "./Assets/HindiDiwas.pdf"
import Asset1 from "./Assets/HindiD1.png"
import Asset2 from "./Assets/HindiD2.png"
import "../EventPages.css";


export default function HindiDiwas() {
  return (
    <div>
      <Header/>
      <div className="event-pages-header" />
      <Card
        img={HindiD}
        alt="JYC Orientation"
        title="JYC Orientation"
        date="14 Sep, 2023"
        about="The JYC orientation provides new students with insights into the club's mission, activities, and the vast array of opportunities it offers for personal and social growth. Attendees have the opportunity to hear from various student coordinators of clubs and committees within the Youth Club, gaining valuable insights into the diversity of activities and leadership opportunities available. The event marks the beginning of an exciting journey for both freshers and existing members, as they look forward to active participation in club activities and contributing to the betterment of the university’s community."
        pdf={HindiDP}
        img1={Asset1}
        alt1="Hindi Diwas"
        img2={Asset2}
        alt2="Hindi Diwas"
      />
      <Footer/>
    </div>
  )
}
