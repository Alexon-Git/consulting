import React from "react";
import "./expert.css";

const Experts = () => {
  return (
    <div className="experts" id="expert">
      <div className="experts-container">
        <div className="experts-head">
          <div className="experts-title">
            <p>Члены команды</p>
            <h2 className="background-gradient">ЭКСПЕРТЫ</h2>
          </div>
          <div className="experts-subtitle">
            <p className="experts-subtitle-bold">
              БЕСПЛАТНЫЙ выезд на предприятие 
              
            </p>
            <p className="experts-subtitle-bold">НЕЗАВИСИМАЯ оценка процессов</p>
            <p className="experts-subtitle-bold">ГАРАНТИЯ</p>
            <p>
              Наши консультанты обладают обширным опытом работы и глубокими
              знаниями в различных отраслях, что позволяет нам предлагать
              клиентам индивидуальные решения, нацеленные на оптимизацию их
              бизнес-процессов, увеличение эффективности и повышение
              конкурентоспособности на рынке.
            </p>
          </div>
        </div>
        <div className="experts-grid">
          <div className="experts-item">
            <img src="./img/collection/aleksandr-tsekh.png" alt="" />
            <h4>Александр Александрович Климов </h4>
            <p>цех</p>
          </div>
          <div className="experts-item">
            <img src="./img/collection/roman-marketolog.png" alt="" />
            <h4>Роман Николаевич Орлов </h4>
            <p>маркетинг</p>
          </div>
          <div className="experts-item">
            <img src="./img/collection/nikolay-tekh.png" alt="" />
            <h4>Николай Денисович Васильев </h4>
            <p>тех контроль</p>
          </div>
          <div className="experts-item">
            <img src="./img/collection/ivan-prodazha.png" alt="" />
            <h4>Иван Маркович Ларионов</h4>
            <p>продажи</p>
          </div>
          <div className="experts-item">
            <img src="./img/collection/artem-sklad.png" alt="" />
            <h4>Артём Ярославович Артамонов </h4>
            <p>склад и снабжение</p>
          </div>
          <div className="experts-item">
            <img src="./img/collection/anastasia-kadr.png" alt="" />
            <h4>Анастасия Александровна Мальцева</h4>
            <p>отдел кадров</p>
          </div>
        </div>
        <img
          className="experts-ellipse-img"
          src="./img/collection/ellipse-experts.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Experts;
