import React from "react";
import "./sector.css";

const Sector = () => {
  return (
    <div className="sector">
      <div className="sector-container">
        <div className="sector-head">
          <div className="sector-title">
            <h1>отрасли</h1>
            <h1 className="background-gradient">которым мы помогаем</h1>
          </div>
          <div className="sector-subtitle">
            <p>
              Наша консалтинговая компания специализируется на оказании помощи
              различным отраслям бизнеса в достижении своих целей и улучшении
              процессов.
            </p>
          </div>
        </div>

        <div className="sector-grid">
          <div className="sector-item">
            <img src="./img/icons/seed.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">Агропромышленный комплекс</h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/tie.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">Государственный сектор</h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/product.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Потребительский сектор и розничная торговля
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/geers.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Металлургический комплекс и машиностроение
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/oil.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Нефтяная и нефтегазовая промышленность, нефтехимия
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/spoon.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">Пищевая промышленность</h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/wood-industries.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Легкая промышленность, деревообрабатывающая промышленность
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/connection.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Связь и телекомму- никации
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/construction.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Строительство и девелопмент, промышленность строительных
                материалов
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/truck.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">Транспорт и логистика</h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/pharmacy.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Фармацевтика и здравоохранение
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/coin.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Финансовый сектор: банки и страховые компании
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/lamp.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">Электроэнергетика</h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/display.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">IT-компании</h4>
            </div>
          </div>
        <img className="sector-circle" src="./img/icons/sector-circle.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sector;
