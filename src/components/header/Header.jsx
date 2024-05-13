import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Функция для открытия/закрытия мобильного меню
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

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
            <a className="btn_white" href="#!">
              Контакты
            </a>
          </div>

          <div class="nav__icon">
            <button class="mobile-nav-btn" onClick={toggleMobileNav}>
            {isMobileNavOpen ? (
            <img className="nav-icon" src="./img/icons/close_icon.svg" alt="Close" />
          ) : (
            <img className="nav-icon" src="./img/icons/mobile_nav.svg" alt="Open" />
          )}
            </button>
          </div>
        </nav>
      </div>
      {isMobileNavOpen && (
        <div className="mobile-nav-overlay">

        <div className="mobile-nav">
          <ul>
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

            <div className="nav_btn_mobile">
              <a className="btn_white-mobile" href="#!">
                Контакты
              </a>
            </div>
          </ul>
        </div>
        </div>
      )}
    </header>
  );
};

export default Header;
