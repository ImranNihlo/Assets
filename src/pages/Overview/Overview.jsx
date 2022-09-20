import React from 'react'
import style from "./overview.module.css"
import platonic_3 from "../../images/Platonic_3.png"
import platonic_4 from "../../images/Platonic_4.png"
import pyramid from "../../images/Pyramid.png"
import arrow_down from "../../images/arrow_down.svg"
import demo from "../../images/arrow-top.svg"
import overview_fon from '../../background/overview-fon.mp4'
import eclipse from "../../images/Ellipse 1.png"
import card_bg from "../../images/card-bg.png"
import { HashLink } from 'react-router-hash-link'


function Overview (props) {
  return (
    <div className={style.overview} id="overview">
      <video src={overview_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <div className={style["vertical-menu"]}>
            <ul className={style["left-menu-overview"]}>
              <li>
                <HashLink to="#home" smooth>
                  home
                </HashLink>
              </li>
              <li className={style.point}>
                .
              </li>
              <li className={style["menu-active"]}>
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
            <span className={style["active-pages"]}>02</span>
            <span className={style["whitespace-right"]}>/</span>
            <span>05</span>
          </div>
          <h1 className={style.title}>
            overview
          </h1>
          <div className={style.subtitle}>
            AI Assets is <span className={style["text-blue"]}>80% faster</span> than traditional methods of asset management and has a raft of other benefits.
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <img src={card_bg} alt={card_bg} className={style["card-bg"]}/>
              <img src={eclipse} alt="eclipse" className={style["card-sirius"]}/>
              <div className={style["card-img"]}>
                <img src={platonic_3} alt="platonic_3" className={style["img-index"]}/>
              </div>
              <div className={style["card-title"]}>
                <img src={arrow_down} alt="arrow_down"/>
                <span>
                  Collect
                </span>
              </div>
              <div className={style["card-subtitle"]}>
                Quickly & efficiently collect building asset data, reducing your workload by up to 80%
              </div>
            </div>
            <div className={style.card}>
              <img src={card_bg} alt={card_bg} className={style["card-bg"]}/>
              <img src={eclipse} alt="eclipse" className={style["card-sirius"]}/>
              <div className={style["card-img"]}>
                <img src={platonic_4} alt="platonic_4" className={style["img-index"]}/>
              </div>
              <div className={style["card-title"]}>
                <img src={arrow_down} alt="arrow_down"/>
                <span>
              Empower
            </span>
              </div>
              <div className={style["card-subtitle"]}>
                Connect Ai Assets to your existing system, to ensure you’re always working off quality, up to date data
              </div>
            </div>
            <div className={style.card}>
              <img src={card_bg} alt={card_bg} className={style["card-bg"]}/>
              <img src={eclipse} alt="eclipse" className={style["card-sirius"]}/>
              <div className={style["card-img"]}>
                <img src={pyramid} alt="pyramid" className={style.pyramid} className={style["img-index"]}/>
              </div>
              <div className={style["card-title"]}>
                <img src={arrow_down} alt="arrow_down"/>
                <span>
              Update
            </span>
              </div>
              <div className={style["card-subtitle"]}>
                Easily keep your asset data accurate, establishing a quality live data feed
              </div>
            </div>
          </div>
          <div className={style["block-button"]}>
            <div className={style["block-icons"]} />
            <div className={style.button}>
              <img src={demo} alt="demo" />
              <div>
                BOOK A DEMO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview