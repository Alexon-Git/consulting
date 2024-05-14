import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div id="project">
      <div className="project-container">
        <div className="project-head">
          <div className="project-title">
            <p>Наши проекты</p>
            <h2>
              {" "}
              <span className="background-gradient">Наши кейсы</span> <br />
              говорят сами за себя
            </h2>
          </div>
          <div className="project-subtitle">
            <p>
              Мы разрабатываем и внедряем стратегии развития, управляем
              изменениями, улучшаем операционную деятельность, оптимизируем
              управленческие процессы, а также повышаем уровень сервиса и
              удовлетворенности клиентов.
            </p>
          </div>
        </div>
        <div className="project-items">
          <div className="project-square">
            <div className="project-square-flex">
              <div className="project-square__title">
                <p>
                  Федеральный банк
                  <br /> (NDA)
                </p>
                <h5>
                  Product <br />
                  Design Cream
                </h5>
              </div>
              <div className="project-square__btn">
                <img src="./img/icons/arrow-top-black.svg" alt="" />
              </div>
            </div>
            <img src="./img/collection/project-img.png" alt="project" />
          </div>

          <div className="project-square bg">
            <div className="project-square-flex">
              <div className="project-square__title">
                <p>Производственная компания (NDA)</p>
                <h5>
                  Launching
                  <br />
                  Products
                </h5>
              </div>
              <div className="project-square__btn">
                <img src="./img/icons/arrow-top-black.svg" alt="" />
              </div>
            </div>
            <img src="./img/collection/project-img.png" alt="project" />
          </div>

          <div className="project-square">
            <div className="project-square-flex">
              <div className="project-square__title">
                <p>
                  Компания
                  <br />
                  Bonava
                </p>
                <h5>
                  Grocery
                  <br />
                  Applications
                </h5>
              </div>
              <div className="project-square__btn">
                <img src="./img/icons/arrow-top-black.svg" alt="" />
              </div>
            </div>
            <img
              className="project-square-img"
              src="./img/collection/project-img.png"
              alt="project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
