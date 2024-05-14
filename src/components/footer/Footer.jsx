import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img
              className="footer-logo"
              src="./img/icons/footer-logo.png"
              alt=""
            />
            <img src="./img/collection/footer-img.png" alt="" />
          </div>
          <div className="footer-title-sector">
            <div className="footer-sector-item">
              <div className="footer-sector-toggle ">
                <span className="background-gradient">Меню</span>
              </div>
              <div className="footer-sector-menu">
                <ul className="footer-sector-menu-list">
                <li>
                    <a href="#!">Услуги</a>
                  </li>
                  <li>
                    <a href="#!">Кейсы</a>
                  </li>
                  <li>
                    <a href="#!">Клиенты</a>
                  </li>
                  <li>
                    <a href="#!">Команда</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-sector-item">
              <div className="footer-sector-toggle ">
                <span className="background-gradient">Услуги</span>
              </div>
              <div className="footer-sector-menu">
                <ul className="footer-sector-menu-list">
                  <li>
                    <a href="#!">Strategy</a>
                  </li>
                  <li>
                    <a href="#!">Creative Content</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Design Service</a>
                  </li>
                  <li>
                    <a href="#!">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#!">Insights</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-sector-item">
              <div className="footer-sector-toggle ">
                <span className="background-gradient">контакты</span>
              </div>
              <div className="footer-sector-menu">
                <ul className="footer-sector-menu-list">
                  <li>
                    <a href="#!">Instagram</a>
                  </li>
                  <li>
                    <a href="#!">Twitter</a>
                  </li>
                  <li>
                    <a href="#!">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#!">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-contacts">
          <div className="footer-address">
            <p>123 St, East Any City, <br />Los Angels, Maze City, London</p>
          </div>
          <div className="footer-info">
            <div className="footers-numbers">
                <p>180 4568 7894</p>
                <p>180 5879 69874</p>
              
            </div>
              <div className="footers-info-img">
                    <img src="./img/icons/linkedln.png" alt="ld" />
                    <img src="./img/icons/ig.png" alt="ig" />
                    <img src="./img/icons/fb.png" alt="fb" />
                </div>
          </div>
        </div>

        <div className="footer-policy">
            <div className="footer-policy-copyright">
                <span>Copyright ©dai themes All Rights Reserved.</span>
            </div>
            <div className="footer-policy-right-content">
            <div className="footer-policy-privacy">
                <p>Terms & Condition </p>

                <p>Privacy Policy</p>
            </div>
              
                <img src="./img/icons/nil.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
