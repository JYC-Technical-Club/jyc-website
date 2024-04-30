import React from "react";
import Card from "../Card/Card";
import "../EventPages.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import AlfaazP from "../../EVENTS/images/Alfaaz.jpg"
import AlfaazPDF from "./Assets/Alfaaz.pdf"
import Asset1 from "./Assets/Alfaaz1.png"
import Asset2 from "./Assets/Alfaaz2.png"
import Asset3 from "./Assets/Alfaaz3.png"

export default function Alfaaz() {
  return (
    <div>
      <Header />
      <div className="event-pages-bg">
      <span className="event-pages-header"/>
        <Card
          img={AlfaazP}
          alt="Alfaz"
          title="Alfaz"
          date="Date: 25 Nov, 2023"
          about="ALFAAZ '22, hosted by JUIT Youth Club's Literary and Debating Club, merged literature, art, and culture against the stunning Himalayan backdrop. The event featured the JUIT Youth Parliament (JYP), a high-level debating competition, a Bollywood Night with participants dressed as iconic characters, and Lafz, The Poetry Night, celebrating poetic expressions. Attendees were captivated by the mesmerizing events, creating unforgettable memories of literature, art, and culture amidst the majestic Himalayas."
          pdf={AlfaazPDF}
          img1={Asset1}
          alt1="Alfaz"
          img2={Asset2}
          alt2="Alfaz"
           img3={Asset3}
          alt3="Alfaz"
        />
      </div>
      <Footer/>
    </div>
  );
}
