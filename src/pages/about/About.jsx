import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content__left">
          <img src="./img/collection/about-img.png" alt="" />
        </div>
        <div className="about-content__right">
          <div className="about-title">
            <p>О нас</p>
            <h4>
              Мы здесь <br />
              чтобы <span className="background-gradient">помочь вам</span>
            </h4>
          </div>
          <div className="about-statistic">
            <div className="about-statistic-numbers">
              <div className="about-statistic-number_item">
                <h4>950+</h4>
                <p>Проектов в год</p>
              </div>
              <div className="about-statistic-number_item about-white">
                <h4>203+</h4>
                <p>Клиентов в год</p>
              </div>
              <div className="about-statistic-number_item">
                <h4>14</h4>
                <p>Лет на рынке</p>
              </div>
            </div>
          </div>
          <div className="about-subtitle">
            <div className="about-subtitle-list">
              <div>
                <ul>• онлайн-поддержка</ul>

                <ul>• Качественные услуги</ul>
              </div>
              <div>
                <ul>• группа экспертов</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
