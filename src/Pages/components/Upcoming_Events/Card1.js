import React from "react";
import image1 from "./image/movienight.jpeg";
import image2 from "./image/diksha.JPG";
import image3 from "./image/event3.jpg";
import "./Card1.css";
import Eventcard from "./Eventcard";
import {Link} from "react-router-dom";

export default function Card1() {
  return (
    <div className="cards-ue">
      <div className="card-ue">
        <Eventcard
          img={image1}
          heading="Movie Night"
          // date='2022'
          about="Get ready for a reel good time at 'Movie Night' - where cinematic magic meets unforgettable memories!"
          link="/movie-night"
        />
      </div>
      <div className="card-ue">
        <Eventcard
          img={image2}
          heading="Diksha"
          // date='2022'
          about="Embark on a journey of new beginnings and unforgettable memories at 'Diksha' – the ultimate freshers party."
          link="/diksha"
        />
      </div>
      <div className="card-ue">
        <Eventcard
          img={image3}
          heading="Atkheliyan"
          // date='2022'
          about="From showing best dance moves to dressing up in the best attires, a chance to showcase talent with Bollywood tadka."
          link="/atkheliyan"
        />
      </div>
      <Link className='all-events' to="/events">See All Events...</Link>
    </div>
  );
}
