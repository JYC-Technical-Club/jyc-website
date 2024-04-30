import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Card from '../Card/Card'
import GarbaNightPDF from "./Assets/GarbaNight.pdf"
import GarbaNightP from "../../EVENTS/images/GarbaNight.webp"

export default function GarbaNight() {
  return (
    <div>
      <Header/>
      <div className="event-pages-header" />
        <Card
            img={GarbaNightP}
            alt="Garba Night"
            title="Garba Night"
            date="Date: 23rd Oct, 2023"
            about="The JYC orientation provides new students with insights into the club's mission, activities, and the vast array of opportunities it offers for personal and social growth. Attendees have the opportunity to hear from various student coordinators of clubs and committees within the Youth Club, gaining valuable insights into the diversity of activities and leadership opportunities available. The event marks the beginning of an exciting journey for both freshers and existing members, as they look forward to active participation in club activities and contributing to the betterment of the university’s community."
            pdf={GarbaNightPDF}
            // img1={Asset1}
            // alt1="JYC Orientation"
            // img2={Asset2}
            // alt2="JYC Orientation"
        />
      <Footer/>
    </div>
  )
}
