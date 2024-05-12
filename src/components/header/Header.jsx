import React from "react";
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="main-container">
        <nav className="head_nav">
          <div className="nav_logo">
            <img src="./img/icons/logo.svg" alt="logo" />
          </div>
          <ul className="nav_list">
            <li>
              <a className="menu_link" href="#!">
                услуги            
              </a>
            </li>
            <li>
              <a className="menu_link" href="#!">
                кейсы
              </a>
            </li>
            <li>
              <a className="nav_link" href="#!">
                клиенты
              </a>
            </li>
            <li>
              <a className="nav_link" href="#!">
                команда
              </a>
            </li>
          </ul>



          <div className="nav_btn">
            <a className="btn_white" href="#!">Контакты</a>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
