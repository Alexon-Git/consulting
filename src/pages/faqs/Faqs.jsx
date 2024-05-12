import React from "react";
import "./faqs.css";
import FaqsItems from "./FaqsItems";

const Faqs = () => {


  return (
    <>
      <div className="faqs">
        <img
          className="faqs-vector-img"
          src="./img/collection/vector-faqs.png"
          alt=""
        />
        <div className="faqs-container">
          <div className="faqs-title">
            <div className="faqs-description">
              <p>Чем мы можем вам помочь</p>
              <h2>наши услуги</h2>
              <span>
                Помогаем организациям быть лучше и эффективней на каждом этапе
                развития.
              </span>
            </div>
            <div className="faqs-buttons">
              <button className="faqs-btn"> Все услуги</button>
              <button>Обучение</button>
              <button>Развитие</button>
              <button>Система HR</button>
              <button>Культура</button>
            </div>
          </div>

          <FaqsItems />
        {/* <img className="faqs-under-vector" src="./img/collection/faqs-under-vector.png" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Faqs;
