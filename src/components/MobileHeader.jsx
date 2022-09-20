import React, { useState } from 'react'
import logo from '../images/AIassetsLogo.svg'
import { HashLink } from 'react-router-hash-link'
import style from './header.module.css'
import arrow from '../images/Arrow 1.svg'

function MobileHeader (props) {
  const [activeBg, setActiveBg] = useState(false);
  const handleActiveBg = () => {
    setActiveBg(!activeBg)
  }
  return (
    <>
      <div className={activeBg ? "top-nav-bg" : "top-nav-bg-none"}/>
      <div className="top-nav">
        <div>
          <HashLink to="#home" smooth>
            <img src={logo} alt="logo"/>
          </HashLink>
        </div>
        <input id="menu-toggle" type="checkbox"/>
        <label className='menu-button-container' htmlFor="menu-toggle" onClick={handleActiveBg}>
          <div className='menu-button'></div>
        </label>
        <ul className="menu">
          <li>
            <h1 className="mobile-menu-title">
              menu
            </h1>
          </li>
          <li>
            <div className="mobile-menu-line"/>
            <div>
              home
            </div>
          </li>
          <li>
            <div className="mobile-menu-line"/>
            <div>
              our clients
            </div>
          </li>
          <li><div className="mobile-menu-line"/>
            <div>
              news
            </div>
          </li>
          <li><div className="mobile-menu-line"/>
            <div>
              contact
            </div>
          </li>
        </ul>
      </div>
      <div className={activeBg ? "mobile-sign-in-active" : "mobile-sign-in"}>
        Sign in
        <img src={arrow} alt="arrow" className={style.arrow}/>
      </div>
    </>
  )
}

export default MobileHeader