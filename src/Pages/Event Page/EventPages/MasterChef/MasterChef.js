import React from "react";
import Card from "../Card/Card";
import "../EventPages.css"
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import MasterChefP from "../../EVENTS/images/Masterchef.jpg"
import MasterChefPDF from "./Assets/MasterChef.pdf"
import Asset1 from "./Assets/MasterChef1.png"
import Asset2 from "./Assets/MasterChef2.png"

export default function MasterChef() {
  return (
    <div>
      <Header />
      <div className="event-pages-header" />
        <Card
          img={MasterChefP}
          alt="Masterchef"
          title="Masterchef"
          date="Date: 04th November, 2023"
          about="An extraordinary culinary event that celebrates the talent and passion of aspiring chefs! This highly anticipated competition brings together students who are eager to showcase their culinary skills and creativity. Prepare to be enthralled as these young chefs demonstrate their culinary prowess, serving up incredible dishes and pushing the boundaries of gastronomy. From the sizzle of the pans to the tantalizing aromas, 'MasterChef' promises an exhilarating experience that will leave you inspired and hungry for more.."
          pdf={MasterChefPDF}
          img1={Asset1}
          alt1="Masterchef"
          img2={Asset2}
          alt2="Masterchef"
        />
      <Footer/>
    </div>
  );
}
