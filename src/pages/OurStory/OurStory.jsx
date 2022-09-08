import React from 'react'
import style from "./ourStory.module.css";
import demo from '../../images/arrow-top.svg'

function OurStory (props) {
  return (
    <div className={style.works}>
      <div className="container">
        <div className={style["works-content"]}>
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