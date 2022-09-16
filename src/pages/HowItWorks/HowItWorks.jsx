import React from 'react'
import style from "./howItWorks.module.css"
import hotItWorks_fon from '../../background/howItWorks_fon.mp4'
import platonic_1 from "../../images/Platonic_1.png"
import sirius from "../../images/Sirius.png"
import subtract from "../../images/Subtract.png"
import { NavLink, Route } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'

function HowItWorks (props) {

  return (
    <div className={style.works}>
      <video src={hotItWorks_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <div className={style["block-title"]}>
            <h1 className={style.title1}>
              how it
            </h1>
            <div className={style["block-image"]}>
              <img src={platonic_1} alt="platonic_1" className={style.platonic1}/>
              <img src={sirius} alt="platonic_1" className={style.sirius}/>
            </div>
            <img src={subtract} alt="subtract" className={style.subtract}/>
            {/*<h1 className={style.title2}>*/}
            {/*  works*/}
            {/*</h1>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks