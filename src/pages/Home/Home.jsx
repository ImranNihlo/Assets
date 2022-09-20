import React from 'react'
import partner from "../../images/partner.svg"
import style from "./home.module.css";
import demo from '../../images/arrow-top.svg'
import homepage_fon from '../../background/homepage-fon.mp4'
import Group_partners from "../../images/Group-partners.png"
import { HashLink } from 'react-router-hash-link'

function Home (props) {
  return (
    <div className={style.homepage} id="home">
      <video src={homepage_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <div className={style["homepage-content"]}>
            <div className={style["vertical-menu"]}>
              <ul className={style["left-menu"]}>
                <li className={style["menu-active"]}>
                  <HashLink to="#home" smooth>
                    home
                  </HashLink>
                </li>
                <li className={style.point}>
                  .
                </li>
                <li>
                  <HashLink to="#overview" smooth>
                    overview
                  </HashLink>
                </li>
                <li className={style.point}>
                  .
                </li>
                <li>
                  <HashLink to="#clients" smooth className={style["menu-whitespace"]}>
                    <span className={style["whitespace-right"]}>our</span> <span>clients</span>
                  </HashLink>
                </li>
                <li className={style.point}>
                  .
                </li>
                <li>
                  <HashLink to="#works" smooth className={style["menu-whitespace"]}>
                    <span className={style["whitespace-right"]}>how</span>
                    <span className={style["whitespace-right"]}>it</span>
                    <span>works</span>
                  </HashLink>
                </li>
                <li className={style.point}>
                  .
                </li>
                <li>
                  <HashLink to="#story" smooth className={style["menu-whitespace"]}>
                    <span className={style["whitespace-right"]}>our</span> <span>story</span>
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className={style.pages}>
              <span className={style["active-pages"]}>01</span>
              <span className={style["whitespace-right"]}>/</span>
              <span>05</span>
            </div>
            <div className={style["home-content"]}>
              <div className={style["left-column"]}>
                <h1 className={style.title}>
                  SMARTER
                </h1>
                <h1 className={style.title2}>
                  PROPERTY
                </h1>
                <h1 className={style.title3}>
                  DATA
                </h1>
                <div className={style.subtitle}>
                  <div className={style["subtitle-row"]}>
                    <div className={style.line}/>
                    With the World’s Fastest Data Collection Apps
                  </div>
                </div>
                <div className={style["homepage-button"]}>
                  <div className={style["block-icons"]} />
                  <div className={style.button}>
                    <img src={demo} alt="demo" />
                    <div>
                      BOOK A DEMO
                    </div>
                  </div>
                </div>
                <div className={style["homepage-awwards"]}>
                  <img src={partner} alt="partner" className={style["homepage-partner"]}/>
                  <span>
                awwwards.
              </span>
                </div>
              </div>
              <div className={style["right-column"]}>
                <div className={style.text}>
                  Streamlining building <span className={style["text-blue"]}>asset</span> data collection & validation – Creating live and accurate asset data
                </div>
                <div className={style.trusted}>
                  trusted by
                </div>
                <img src={Group_partners} alt="Group-partners" className={style["group-partners"]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;