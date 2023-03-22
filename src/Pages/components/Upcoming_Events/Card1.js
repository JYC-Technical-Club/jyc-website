import React from "react";
import t20 from "./image/t20.jpeg";
import image2 from "./image/event2.jpg";
import image3 from "./image/event3.jpg";
import "./Card1.css";
import Eventcard from "./Eventcard";
import {Link} from "react-router-dom";

export default function Card1() {
  return (
    <div className="cards-ue">
      <div className="card-ue">
        <Eventcard
          img={t20}
          heading="T20 International"
          // date='2022'
          about="For all the criket fans out there, the Technical Club will be screening the match."
          link="/t20"
        />
      </div>
      <div className="card-ue">
        <Eventcard
          img={image2}
          heading="Wellness Week"
          // date='2022'
          about="Unite people through common goals of community awareness, prompting a better quality of life"
          link="/wellness-week"
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
