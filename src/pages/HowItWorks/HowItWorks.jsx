import React from 'react'
import style from "./howItWorks.module.css"
import hotItWorks_fon from '../../background/howItWorks_fon.mp4'
import sirius from "../../images/Platonic_4.png"

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
            <img src={sirius} alt="sirius"/>
            <h1 className={style.title2}>
              works
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks