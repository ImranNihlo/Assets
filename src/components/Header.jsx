import React from 'react'
import logo from '../images/AIassetsLogo.svg'
import arrow from "../images/Arrow 1.svg"
import style from "./header.module.css"
import { NavLink } from 'react-router-dom'

function Header (props) {
  return (
    <div className="container">
      <header className={style.header}>
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
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className={style["sign-in"]}>
          Sign in
          <img src={arrow} alt="arrow" className={style.arrow}/>
        </div>
      </header>
    </div>
  )
}

export default Header