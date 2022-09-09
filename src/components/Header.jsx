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
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className={style["menu-li"]}>
                  <NavLink to="/overview">Our Clients</NavLink>
                </li>
                <li className={style["menu-li"]}>
                  <NavLink to="/our-story">News</NavLink>
                </li>
                <li className={style["menu-li"]}>
                  <NavLink to="/our-clients">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style["sign-in"]}>
            <NavLink to="/hot-in-works">Sign in</NavLink>
            <img src={arrow} alt="arrow" className={style.arrow}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header