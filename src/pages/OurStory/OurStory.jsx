import React from 'react'
import style from "./ourStory.module.css";
import demo from '../../images/arrow-top.svg'
import { HashLink } from 'react-router-hash-link'

function OurStory (props) {
  return (
    <div className={style.story} id="story">
      <div className="container">
        <div className={style["story-vertical-menu"]}>
          <ul className={style["left-menu-story"]}>
            <li>
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
            <li className={style["menu-active"]}>
              <HashLink to="#story" smooth className={style["menu-whitespace"]}>
                <span className={style["whitespace-right"]}>our</span> <span>story</span>
              </HashLink>
            </li>
          </ul>
        </div>
        <div className={style.pages}>
          <span className={style["active-pages"]}>05</span>
          <span className={style["whitespace-right"]}>/</span>
          <span>05</span>
        </div>
        <div className={style["story-content"]}>
          <div className={style["vertical-menu"]}>

          </div>
          <div className={style["right-column"]}>
            <h1 className={style.title1}>
              our
            </h1>
            <h1 className={style.title2}>
              story
            </h1>
            <div className={style["block-subtitle"]}>
              <div>
                <div className={style["line-blue"]}>

                </div>
                <div className={style.line}>

                </div>
              </div>
              <div className={style.subtitle}>
                Born out of frustration, after years of manually collecting data, using out of date processes and tools – The
                Ai Assets system was built in house to <span className={style["text-blue"]}>streamline</span> the entire process of data collection, quality assurance and lifecycle reporting.
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
    </div>
  )
}

export default OurStory