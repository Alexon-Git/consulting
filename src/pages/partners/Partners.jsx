import React from "react";
import "./partners.css";

const Partners = () => {
  return (
    <div id="client">
      <div className="partners-container">
        <div className="partners-head">
          {/* <p>Сотрудничество</p> */}
          <h3>наши партнеры</h3>
        </div>
        <div className="partners-company">
          <div className="partners-company-img">
            <img src="./img/collection/company-icon1.png" alt="" />
            <img src="./img/collection/company-icon2.png" alt="" />
            <img src="./img/collection/company-icon3.png" alt="" />
            <img src="./img/collection/company-icon4.png" alt="" />
          <img src="./img/collection/company-icon5.png" alt="" />

          </div>
          <div className="partners-company-img">
          <img src="./img/collection/company-icon6.png" alt="" />
          <img src="./img/collection/company-icon7.png" alt="" />
          <img src="./img/collection/company-icon8.png" alt="" />
          <img src="./img/collection/company-icon9.png" alt="" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
