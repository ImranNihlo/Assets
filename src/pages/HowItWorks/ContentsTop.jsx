import React from 'react'
import style from './howItWorks.module.css'
import paper from '../../images/Paper.png'
import arrow_top from '../../images/arrow-curve-top.png'
import camera from '../../images/Camera.png'
import arrow_bottom from '../../images/arrow-curve-bottom.png'
import locat from '../../images/Location.png'
import show from '../../images/Show.png'
import arrow from '../../images/Arrow.png'

function ContentsTop (props) {
  return (
    <div className={style["contents-top"]}>
      <div className={style.box01}>
        <div className={style["box-number"]}>
          01
        </div>
        <div className={style["box-img"]}>
          <img src={paper} alt="paper"/>
        </div>
        <div className={style["box-text"]}>
          <p>Collect notes</p> with pen & paper
        </div>
      </div>
      <div className={style["box-arrow-top"]} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000"
           data-aos-easing="ease-in-out">
        <img src={arrow_top} alt="arrow"/>
      </div>
      <div className={style.box02}>
        <div className={style["box-number"]}>
          02
        </div>
        <div className={style["box-img"]}>
          <img src={camera} alt="camera"/>
        </div>
        <div className={style["box-text"]}>
          <p>Take photos</p> using a camera
        </div>
      </div>
      <div className={style["box-arrow-bottom"]} data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000"
           data-aos-easing="ease-in-out">
        <img src={arrow_bottom} alt="arrow"/>
      </div>
      <div className={style.box03}>
        <div className={style["box-number"]}>
          03
        </div>
        <div className={style["box-img"]}>
          <img src={locat} alt="locat"/>
        </div>
        <div className={style["box-text"]}>
          <p>Return to</p> the office
        </div>
      </div>
      <div className={style["box-arrow-top"]} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000"
           data-aos-easing="ease-in-out">
        <img src={arrow_top} alt="arrow"/>
      </div>
      <div className={style.box04}>
        <div className={style["box-number"]}>
          04
        </div>
        <div className={style["box-img"]}>
          <img src={show} alt="show"/>
        </div>
        <div className={style["box-text"]}>
          <p>Review</p> your notes
        </div>
      </div>
      <div className={style["box-arrow-bottom"]} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000"
           data-aos-easing="ease-in-out">
        <img src={arrow_bottom} alt="arrow"/>
      </div>
      <div className={style.box05}>
        <div className={style["box-number"]}>
          05
        </div>
        <div className={style["box-img"]}>
          <img src={arrow} alt="arrow"/>
        </div>
        <div className={style["box-text"]}>
          <p>Input</p> your notes
        </div>
      </div>
    </div>
  )
}

export default ContentsTop