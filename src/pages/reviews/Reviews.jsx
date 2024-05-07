import React from "react";
import "./reviews.css";

const Reviews = () => {
  return (
    <div>
      <div className="reviews-container">
        <div className="reviews-head">
          <p>Отзывы</p>
          <h3>Что о нас говорят</h3>
        </div>
      
      <div className="reviews-item">
        <div className="reviews-slider">
          <div className="reviews-stars">
            <img src="./img/icons/stars.png" alt="" />
          </div>
          <div className="reviews-title">
            <p>
              Внимание команды к запросу клиента, а также полное погружение и
              кастомизация продукта, позволяет нам обращаться за решением любой
              нестандартной задачи, а также рекомендовать TSQ как надежного,
              профессионального в сфере обучения и консалтинга!
            </p>
          </div>
          <div className="reviews-person">
            <img src="" alt="" />
            <div className="reviews-name">
                <h6>Иванов Иван</h6>
                <p>Ui Deisgner</p>
            </div>
          </div>
        </div>
        <div className="reviews-pagination">
            <div className="reviews-circle">

            </div>
        </div>
      </div>
      /</div>
    </div>
  );
};

export default Reviews;
