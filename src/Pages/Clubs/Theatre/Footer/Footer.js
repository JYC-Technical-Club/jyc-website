import React, { useState } from "react";
import "./Footer.css";
import logojyc from "./Images/logojyc.png";
import logotmp from "./Images/logotmp.png";

function Footer() {
  //for 1st
  const [isOpen1, setIsOpen1] = useState(false)

  const onClickFooter1 = () => {
    setIsOpen1(!isOpen1);
  }

  //for 2nd
  const [isOpen2, setIsOpen2] = useState(false)

  const onClickFooter2 = () => {
    setIsOpen2(!isOpen2);
  }

  //for 3rd
  const [isOpen3, setIsOpen3] = useState(false)

  const onClickFooter3 = () => {
    setIsOpen3(!isOpen3);
  }

  //for 4th
  const [isOpen4, setIsOpen4] = useState(false)

  const onClickFooter4 = () => {
    setIsOpen4(!isOpen4);
  }




  return (
    <footer className="footer-content">
      <div className="footer-wrapper">
        <div className="footer-links-wrapper">
          <div></div>
          <div className="jyc-tmp">
            <div className="jyc">
              <div className="logojyc">
                <img className="footer-logojyc" src={logojyc} />
              </div>
              <div className="jyc-text">
                JUIT Youth Club (JYC) is the name <br />
                of enthusiasm, development, <br /> consistency and effort.
              </div>
            </div>
            <div className="tmp">
              <div className="logotmp">
                <img className="footer-logotmp" src={logotmp} />
              </div>
              <div>
                {" "}
                Managed by Technical <br /> Sciences, Movies and <br />{" "}
                Photography club
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={`links-wrapper-1 ${isOpen1 ? 'links-wrapper-1-active' : ''} `}>
            <div className="footer-heading"><div className="footer-heading-m">CLUBS</div>
              <div onClick={onClickFooter1} className="more-options-m">+</div></div>
            <ul>
              <li>
                <a href="#">Technical Sciences, Movies and Photography</a>
              </li>
              <li>
                <a href="#">Environment, Ecology and Health</a>
              </li>
              <li>
                <a href="#">Literary and Debating</a>
              </li>
              <li>
                <a href="#">Theater and Music</a>
              </li>
              <li>
                <a href="#">Cultural and Dance</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-2 ${isOpen2 ? 'links-wrapper-2-active' : ''} `}>
            <div className="footer-heading"><div className="footer-heading-m">COMMITTEES</div>
              <div onClick={onClickFooter2} className="more-options-m">+</div></div>
            <ul>
              <li>
                <a href="#">Procurement and Event Management</a>
              </li>
              <li>
                <a href="#">Registration and Hospitality</a>
              </li>
              <li>
                <a href="#">Media and Publicity</a>
              </li>
              <li>
                <a href="#">Creative Arts</a>
              </li>
              <li>
                <a href="#">Disciplinary</a>
              </li>
              <li>
                <a href="#">Finance</a>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-3 ${isOpen3 ? 'links-wrapper-3-active' : ''} `}>
            <div className="footer-heading">
              <div className="footer-heading-m">CONTACT US</div>
              <div onClick={onClickFooter3} className="more-options-m">+</div>
            </div>
            <ul>
              <li>
                <a href="#">JYC President - president.jyc@juitsolan.in</a>
              </li>
              <li>
                <a href="#">Support - jycphotographyclub1@gmail.com</a>
              </li>
              <li>
                <a href="#">
                  Address - Waknaghat, P.O. Waknaghat, Teh Kandaghat, Distt.
                  Solan PIN-173 234 (H.P.), India
                </a>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-4 ${isOpen4 ? 'links-wrapper-4-active' : ''} `}>
            <div className="footer-heading">
              <div className="footer-heading-m">FOLLOW US</div>
              <div onClick={onClickFooter4} className="more-options-m">+</div>
            </div>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            Copyright &copy; 2022 JYC All rights reserved.
          </div>
          <div className="social-icons">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </div>
          <div className="footer-option-name">
            <a href="#" className="team">
              Team </a>
            |
            <a href="#" className="team"> Certification </a>
            <a href="#" className="team">
              | Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
