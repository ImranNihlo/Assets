import React, { useState } from 'react'
import style from "./howItWorks.module.css"
import hotItWorks_fon from '../../background/howItWorks_fon.mp4'
import platonic_1 from "../../images/Platonic_1.png"
import sirius from "../../images/Sirius.png"
import subtract from "../../images/Subtract.png"
import vector from "../../images/Vector.png"
import assets_folder from "../../images/Assets_folder.png"
import nout from "../../images/Nout.png"
import assets_chart from "../../images/Assets_chart.png"
import ContentsTop from './ContentsTop'
import ContentsBottom from './ContentsBottom'
import arrow_works_top from "../../images/Arrow-works-top.png"
import demo from '../../images/arrow-top.svg'
import { HashLink } from 'react-router-hash-link'

function HowItWorks (props) {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active)
  };
  return (
    <div className={style.works} id="works">
      <video src={hotItWorks_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <div className={style["works-vertical-menu"]}>
            <ul className={style["left-menu-works"]}>
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
              <li  className={style["menu-active"]}>
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
            <span className={style["active-pages"]}>04</span>
            <span className={style["whitespace-right"]}>/</span>
            <span>05</span>
          </div>
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
          <div className={style["switch-block"]}>
            <div className={active ? `${style["switch-left"]}` : `${style["switch-right"]}`}>
              <p>traditional</p> method
            </div>
            <div className={style.switch}>
              <button
                      className="carousel-control-prev switch-left-btn"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                      onClick={handleClick}
              >
                <span className={active ? "carousel-control-prev-icon carousel-prev-icon-active" : "carousel-control-prev-icon carousel-prev-icon"}
                      aria-hidden="true">
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <span className={style["switch-text"]}>
                choose a side
              </span>
              <button
                      className="carousel-control-next switch-right-btn"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                      onClick={handleClick}
              >
                <span className={active ? "carousel-control-next-icon carousel-next-icon" : "carousel-control-next-icon carousel-next-icon-active"}
                      aria-hidden="true">
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className={active ? `${style["switch-right"]}` : `${style["switch-left"]}`}>
              <p>AI Assets</p> method
            </div>
          </div>
          <div id="carouselExampleControls" className="carousel slide works-slide" data-bs-ride="carousel" data-bs-interval={5000000}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className={style["works-content"]}>
                  <ContentsTop />
                  <div className={style.vector}>
                    <img src={vector} alt="vector"/>
                  </div>
                  <ContentsBottom />
                  <div className={style["traditional-button-block"]}>
                    <div className={style["traditional-icons"]} />
                    <div className={style["traditional-button"]}>
                      <div>
                        DISCOVER AI ASSETS METHODS
                      </div>
                      <img src={arrow_works_top} alt="arrow_works_top" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={style["assets-method"]}>
                  <h4 className={style["assets-title"]}>
                    <p>Create a live asset register through the power</p>
                    of <span className={style["assets-blue"]}>Artificial Intelligence</span>
                  </h4>
                  <div className={style["assets-block"]}>
                    <div className={style["block1"]}>
                      <div className={style["assets-number"]}>
                        01
                      </div>
                      <div className={style["assets-img"]}>
                        <img src={assets_folder} alt="assets_folder" className={style["assets_folder"]}/>
                      </div>
                      <div className={style["assets-block-title"]}>
                        collect or update data
                      </div>
                      <div className={style["assets-description"]}>
                        Quickly & consistently collect or update building asset data with the world’s fastest surveying Mobile-App
                      </div>
                    </div>
                    <div className={style["block2"]}>
                      <div className={style["assets-number"]}>
                        02
                      </div>
                      <div className={style["assets-img"]}>
                        <img src={nout} alt="nout" className={style.nout}/>
                      </div>
                      <div className={style["assets-block-title"]}>
                        sync to a cloud
                      </div>
                      <div className={style["assets-description"]}>
                        Instantly sync to a cloud based Web-portal
                      </div>
                    </div>
                    <div className={style["block3"]}>
                      <div className={style["assets-number"]}>
                        03
                      </div>
                      <div className={style["assets-img"]}>
                        <img src={assets_chart} alt="assets_chart" className={style["assets_chart"]}/>
                      </div>
                      <div className={style["assets-block-title"]}>
                        generate lifecycle reports
                      </div>
                      <div className={style["assets-description"]}>
                        View comprehensive dashboards and generate lifecycle reports a click of a button
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style["assets-button-block"]}>
                  <div className={style["assets-icons"]} />
                  <div className={style["assets-button"]}>
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
      </div>
    </div>
  )
}

export default HowItWorks