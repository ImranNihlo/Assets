import React from 'react'
import style from "./overview.module.css"
import platonic_3 from "../../images/Platonic_3.png"
import platonic_4 from "../../images/Platonic_4.png"
import pyramid from "../../images/Pyramid.png"
import arrow_down from "../../images/arrow_down.svg"
import demo from "../../images/arrow-top.svg"
import overview_fon from '../../background/overview-fon.mp4'

function Overview (props) {
  return (
    <div className={style.overview} id="overview">
      <video src={overview_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <h1 className={style.title}>
            overview
          </h1>
          <p className={style.subtitle}>
            AI Assets is <span className={style["text-blue"]}>80% faster</span> than traditional methods
          </p>
          <p className={style.subtitle}>
            of asset management and has a raft of other benefits.
          </p>
          <div className={style.cards}>
            <div className={style.card}>
              <div>
                <img src={platonic_3} alt="platonic_3"/>
              </div>
              <div className={style["title-card"]}>
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
              <div>
                <img src={platonic_4} alt="platonic_4"/>
              </div>
              <div className={style["title-card"]}>
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
              <div>
                <img src={pyramid} alt="pyramid" className={style.pyramid}/>
              </div>
              <div className={style["title-card"]}>
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