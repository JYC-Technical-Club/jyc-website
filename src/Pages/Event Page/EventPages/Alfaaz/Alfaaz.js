import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Alfaaz() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=160F1aPoXTZGbhO19-JjxHBdX2KuhDj4Q"
          alt="Alfaz"
          title="Alfaz"
          date=""
          about="ALFAAZ '22, hosted by JUIT Youth Club's Literary and Debating Club, merged literature, art, and culture against the stunning Himalayan backdrop. The event featured the JUIT Youth Parliament (JYP), a high-level debating competition, a Bollywood Night with participants dressed as iconic characters, and Lafz, The Poetry Night, celebrating poetic expressions. Attendees were captivated by the mesmerizing events, creating unforgettable memories of literature, art, and culture amidst the majestic Himalayas."
          img1="https://drive.google.com/uc?export=view&id=1eTLqeZzZGUHHR3PJ-zYZgR_6gEG8KqhE"
          alt1="Alfaz"
          img2="https://drive.google.com/uc?export=view&id=1RIsnlJaBzV3loaCNz7TJEj52JGNsbMzV"
          alt2="Alfaz"
           img3="https://drive.google.com/uc?export=view&id=1ao7rOaVSV-2kR2924_yXgt51finy57wB"
          alt3="Alfaz"
          img4="https://drive.google.com/uc?export=view&id=10OdzKf_oZAvC6Mjsz3FAZnP4HyTkaGtu"
          alt4="Alfaz"
          img5="https://drive.google.com/uc?export=view&id=1oH_KDPCh88wu2AgxKhK2dV4esyodPzyK"
          alt5="Alfaz"
        />
      </div>
      <Footer/>
    </div>
  );
}
