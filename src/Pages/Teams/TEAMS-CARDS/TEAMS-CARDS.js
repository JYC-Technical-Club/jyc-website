import React from "react";
import "./TEAMS-CARDS.css";
import { Link } from 'react-router-dom';

export default function Card(parse) {
  return (
    <div className="container">
      <div className="cards">
        <img className="person-img" src={parse.img} />
        <div className="info">
          <div className="name">{parse.name}</div>
          <div className="text">{parse.text}</div>
          <div className="card-line">
            <hr></hr>
          </div>
          <div className="socials-dev-team">
            <div class="social-dev-team">
              <Link className='links'
                to={{
                  pathname: parse.instagram,
                  state: { fromDashboard: true }
                }}><i class="fab fa-instagram"></i>
              </Link>
            </div>
            <div class="social-dev-team">
              <Link className='links'
                to={{
                  pathname: parse.twitter,
                  state: { fromDashboard: true }
                }}><i class="fab fa-twitter"></i>
              </Link>
            </div>
            <div class="social-dev-team">
              <Link className='links'
                to={{
                  pathname: parse.linkedin,
                  state: { fromDashboard: true }
                }}><i class="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
