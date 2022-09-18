import React from 'react'
import style from './howItWorks.module.css'
import arrow_top_left from '../../images/Arrow_left_top.png'
import arrow_bottom_left from '../../images/Arrow_left_bottom.png'
import clock from "../../images/Clock.png"
import message from "../../images/Message.png"
import chart from "../../images/Chart.png"
import folder from "../../images/Folder.png"
import arrow_down from "../../images/Arrowdown.png"

function ContentsBottom (props) {
  return (
    <div className={style["contents-bottom"]}>
      <div className={style.box10}>
        <div className={style["box-number"]}>
          10
        </div>
        <div className={style["box-img"]}>
          <img src={clock} alt="clock" className={style.clock}/>
        </div>
        <div className={style["box-text"]}>
          <p>Start all</p>over again
        </div>
      </div>
      <div className={style["box-arrow-top"]}>
        <img src={arrow_top_left} alt="arrow_top_left"/>
      </div>
      <div className={style.box09}>
        <div className={style["box-number"]}>
          09
        </div>
        <div className={style["box-img"]}>
          <img src={message} alt="message"/>
        </div>
        <div className={style["box-text"]}>
          <p>Email</p>your data
        </div>
      </div>
      <div className={style["box-arrow-bottom"]}>
        <img src={arrow_bottom_left} alt="arrow_bottom_left"/>
      </div>
      <div className={style.box08}>
        <div className={style["box-number"]}>
          08
        </div>
        <div className={style["box-img"]}>
          <img src={chart} alt="chart"/>
        </div>
        <div className={style["box-text"]}>
          <p>Create and</p>edit reports
        </div>
      </div>
      <div className={style["box-arrow-top"]}>
        <img src={arrow_top_left} alt="arrow_top_left"/>
      </div>
      <div className={style.box07}>
        <div className={style["box-number"]}>
          07
        </div>
        <div className={style["box-img"]}>
          <img src={folder} alt="folder"/>
        </div>
        <div className={style["box-text"]}>
          <p>Add costing and</p>lifecycle data
        </div>
      </div>
      <div className={style["box-arrow-bottom"]}>
        <img src={arrow_bottom_left} alt="arrow_bottom_left"/>
      </div>
      <div className={style.box06}>
        <div className={style["box-number"]}>
          06
        </div>
        <div className={style["box-img"]}>
          <img src={arrow_down} alt="arrow_down"/>
        </div>
        <div className={style["box-text"]}>
          <p>Upload</p>your photos
        </div>
      </div>
    </div>
  )
}

export default ContentsBottom