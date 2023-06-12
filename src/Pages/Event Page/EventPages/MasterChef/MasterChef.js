import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function MasterChef() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=1iBPnvP8Be-4vUExibg946SQo4F4FnPVk"
          alt="Masterchef"
          title="Masterchef"
          date="Date: 19th November, 2022"
          about="An extraordinary culinary event that celebrates the talent and passion of aspiring chefs! This highly anticipated competition brings together students who are eager to showcase their culinary skills and creativity. Prepare to be enthralled as these young chefs demonstrate their culinary prowess, serving up incredible dishes and pushing the boundaries of gastronomy. From the sizzle of the pans to the tantalizing aromas, 'MasterChef' promises an exhilarating experience that will leave you inspired and hungry for more.."
          img1="https://drive.google.com/uc?export=view&id=17OIfOAkBRd7AMU_mGmR7dIrCFgi4B5LJ"
          alt1="Masterchef"
          img2="https://drive.google.com/uc?export=view&id=15HNv5GeuPvb3cGxatbl1-qFBu5U7_tx4"
          alt2="Masterchef"
           img3="https://drive.google.com/uc?export=view&id=1OeyDz7GuiMKZXMtKBeAq8TaeNt1-lbHx"
          alt3="Masterchef"
          img4="https://drive.google.com/uc?export=view&id=10DwmIBOhagvgL-M8o7I2Yb3hchakurx5"
          alt4="Masterchef"
          img5="https://drive.google.com/uc?export=view&id=1BMPOagrZpE1Ru6F7aXppar2aKlt4Wzbn"
          alt5="Masterchef"
        />
      </div>
      <Footer/>
    </div>
  );
}
