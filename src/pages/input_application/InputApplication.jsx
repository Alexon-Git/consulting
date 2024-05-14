import React from "react";
import "./inputapplication.css";

const InputApplication = () => {
  return (
    <div>
      <div className="application-container" id="application">
        <img
          className="application-container-img"
          src="./img/collection/inputs-application.png"
          alt=""
        />

        <div className="application-inputs-items">
          <h3>Оставить заявку</h3>
          <div className="input-item">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Имя"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Фамилия"
            />
          </div>
          <div className="input-item">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Номер телефона"
            />
            <input type="email" id="email" name="email" placeholder="Почта" />
          </div>
          <textarea
            className="additionalMessage"
            placeholder="Дополнительное сообщение"
          />
          <button className="submit-button" type="submit">
            Отправить <img src="./img/icons/button-submit.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputApplication;
