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
            <img src="./img/collection/company-left.png" alt="" />
            <img src="./img/collection/company-right.png" alt="" />
          </div>
          <div className="partners-company-img">
            <img src="./img/collection/company-left-bottom.png" alt="" />
            <img src="./img/collection/company-right-bottom.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
