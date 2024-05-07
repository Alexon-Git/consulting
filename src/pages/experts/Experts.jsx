import React from "react";
import "./expert.css";

const Experts = () => {
  return (
    <div className="experts">
      <div className="experts-container">
        <div className="experts-head">
          <div className="experts-title">
            <p>Члены команды</p>
            <h2 className="background-gradient">ЭКСПЕРТЫ</h2>
          </div>
          <div className="experts-subtitle">
           <p>
            Наши консультанты обладают обширным опытом работы и глубокими
            знаниями в различных отраслях, что позволяет нам предлагать клиентам
            индивидуальные решения, нацеленные на оптимизацию их
            бизнес-процессов, увеличение эффективности и повышение
            конкурентоспособности на рынке.
            </p> 
          </div>
        </div>
        <div className="experts-grid">
            <div className="experts-item">
                <img src="./img/collection/expert.png" alt="" />
                <h4>Jenifer Nisha</h4>
                <p>Creative Director</p>
            </div>
            <div className="experts-item">
                <img src="./img/collection/expert.png" alt="" />
                <h4>Jenifer Nisha</h4>
                <p>Creative Director</p>
            </div>
            <div className="experts-item">
                <img src="./img/collection/expert.png" alt="" />
                <h4>Jenifer Nisha</h4>
                <p>Creative Director</p>
            </div>
            <div className="experts-item">
                <img src="./img/collection/expert.png" alt="" />
                <h4>Jenifer Nisha</h4>
                <p>Creative Director</p>
            </div>
            <div className="experts-item">
                <img src="./img/collection/expert.png" alt="" />
                <h4>Jenifer Nisha</h4>
                <p>Creative Director</p>
            </div>
            <div className="experts-item">
                <img src="./img/collection/expert.png" alt="" />
                <h4>Jenifer Nisha</h4>
                <p>Creative Director</p>
            </div>
        </div>
        <img className="experts-ellipse-img" src="./img/collection/ellipse-experts.svg" alt="" />
      </div>
    </div>
  );
};

export default Experts;
