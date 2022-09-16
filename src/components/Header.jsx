import React from 'react'
import logo from '../images/AIassetsLogo.svg'
import arrow from "../images/Arrow 1.svg"
import style from "./header.module.css"
import { NavLink } from 'react-router-dom'

function Header (props) {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style["header-content"]}>
          <div className={style["header-left"]}>
            <div>
              <img src={logo} alt="logo"/>
            </div>
            <nav>
              <ul className={style.menu}>
                <li className={style["menu-li"]}>
                  Home
                </li>
                <li className={style["menu-li"]}>
                  Our Clients
                </li>
                <li className={style["menu-li"]}>
                  News
                </li>
                <li className={style["menu-li"]}>
                  Contact
                </li>
              </ul>
            </nav>
          </div>
          <div className={style["sign-in"]}>
            Sign in
            <img src={arrow} alt="arrow" className={style.arrow}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header