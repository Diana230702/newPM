import React from "react";
import "../Navbar/Navbar.css";
import logo from "../images/logofirst.svg";
import menu from "../images/menu.svg";
import search from "../images/search.svg";
import cart from "../images/cart.svg";
import ru from "../images/ru.svg";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="firstBlock">
        <img className="firstBlock_img_logo" src={menu} alt="" />
        <img className="firstBlock_img_text" src={logo} alt="" />
      </div>
      <div className="secondBlock">
        <ul className="secondBlock_ul">
          <li>Главная</li>
          <li>Продукция</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="thirdBlock">
        <div className="searchs">
          <img src={search} alt="" />
          <input className="bla" type="text" />
        </div>
        <button className="thirdBlock_btn">Войти</button>
        <button>
          <img src={ru} alt="" />
        </button>
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
