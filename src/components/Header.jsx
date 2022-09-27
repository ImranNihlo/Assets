import React from 'react'
import logo from '../images/AIassetsLogo.svg'
import arrow from "../images/Arrow 1.svg"
import style from "./header.module.css"
import { HashLink } from 'react-router-hash-link'
import MobileHeader from './MobileHeader'

function Header (props) {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style["header-content"]}>
          <div className={style["header-left"]}>
            <div>
              <HashLink to="#home" smooth>
                <img src={logo} alt="logo"/>
              </HashLink>
            </div>
            <nav>
              <ul className={style.menu}>
                <li className={style["menu-li"]}>
                  <HashLink to="#home" smooth>
                    Home
                  </HashLink>
                </li>
                <li className={style["menu-li"]}>
                  <HashLink to="#clients" smooth>
                    Our Clients
                  </HashLink>
                </li>
                <li className={style["menu-li"]}>
                  <HashLink to="#news" smooth>
                    News
                  </HashLink>
                </li>
                <li className={style["menu-li"]}>
                  <HashLink to="#contact" smooth>
                    Contact
                  </HashLink>
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