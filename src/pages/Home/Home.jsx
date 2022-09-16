import React from 'react'
import partner from "../../images/partner.svg"
import style from "./home.module.css";
import demo from '../../images/arrow-top.svg'
import homepage_fon from '../../background/homepage-fon.mp4'
import Group_partners from "../../images/Group-partners.png"

function Home (props) {
  return (
    <div className={style.homepage}>
      <video src={homepage_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <div className={style["homepage-content"]}>
            {/*<div className={style["vertical-menu"]}>*/}
            {/*  <ul className={style["left-menu"]}>*/}
            {/*    <li>*/}
            {/*      home*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      .*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      overview*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      .*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      our clients*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
            <div className={style.content}>
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
                    With the World’s Fastest
                  </div>
                  <span>
                    Data Collection Apps
                  </span>
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
                <span className={style.trusted}>
                  trusted by
                </span>
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