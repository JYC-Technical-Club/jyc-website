import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Card from '../Card/Card'
import DhunP from "../../EVENTS/images/Dhun.jpg"
import DhunPDF from "./Assets/Dhun.pdf"
import Asset1 from "./Assets/Dhun1.png"
import Asset2 from "./Assets/Dhun2.png"
import Asset3 from "./Assets/Dhun3.png"

export default function Dhun() {
  return (
    <div>
      <Header/>
      <div className="event-pages-header" />
        <Card
            img={DhunP}
            alt="Dhun"
            title="Dhun"
            date="20 Mar, 2024"
            about="The JYC orientation provides new students with insights into the club's mission, activities, and the vast array of opportunities it offers for personal and social growth. Attendees have the opportunity to hear from various student coordinators of clubs and committees within the Youth Club, gaining valuable insights into the diversity of activities and leadership opportunities available. The event marks the beginning of an exciting journey for both freshers and existing members, as they look forward to active participation in club activities and contributing to the betterment of the university’s community."
            pdf={DhunPDF}
            img1={Asset1}
            alt1="Dhun"
            img2={Asset2}
            alt2="Dhun"
            img3={Asset3}
        />
      <Footer/>
    </div>
  )
}
