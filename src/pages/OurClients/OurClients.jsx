import React from 'react'
import asset from "../../images/asset-wize.png"
import style from "./ourClients.module.css"
import demo from '../../images/arrow-top.svg'
import woolworths from "../../images/woolworths.png"
import sherlock from "../../images/sherlock.png"
import mbm from "../../images/mbm.png"
import wt from "../../images/wt.png"
import sydney from "../../images/sydney.png"
import ourClients_fon from "../../background/ourclients-fon.mp4"
import { HashLink } from 'react-router-hash-link'
import MobileSlide from './components/MobileSlide'

function OurClients (props) {
  const clientsMenu = document.querySelector("#clients-menu");
  const funcScrool = () => {
    clientsMenu.scrollTop = 100;
  }
  funcScrool();
  return (
    <div className={style.clients} id="clients">
      <video src={ourClients_fon} type="video/mp4" autoPlay muted loop className={style.video}></video>
      <div className={style.position}>
        <div className="container">
          <div className={style["clients-content"]}>
            <div className={style["clients-vertical-menu"]} id="clients-menu">
              <ul className={style["left-menu-clients"]}>
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
                <li className={style["menu-active"]}>
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
              <span className={style["active-pages"]}>03</span>
              <span className={style["whitespace-right"]}>/</span>
              <span>05</span>
            </div>
            <div className={style["right-column"]}>
              <h1 className={style.title1}>
                OUR
              </h1>
              <h1 className={style.title2}>
                CLIENTS
              </h1>
              <MobileSlide />
              <div className={style["clients-section"]}>
                <div className={style["block-clients-1"]}>
                  <img src={asset} alt="asset" className={style.asset}/>
                  <div className={style["clients-text"]}>
                    <h3 className={style["clients-title"]}>
                      This is the future of property surveying and consulting
                    </h3>
                    <div className={style["clients-subtitle"]}>
                      We don’t have to spend time collating all of our data, its already in a <span className={style["text-blue"]}>number of formats</span> once we leave site
                    </div>
                  </div>
                </div>
                <div className={style["block-clients-2"]}>
                  <img src={woolworths} alt="woolworths" className={style.woolworths}/>
                  <div className={style["clients-text"]}>
                    <h3 className={style["clients-title"]}>
                      We completed the project 80% faster than previous methods
                    </h3>
                    <div className={style["clients-subtitle"]}>
                      We couldn’t believe how <span className={style["text-blue"]}>efficient</span> this software is
                    </div>
                  </div>
                </div>
                <div className={style["block-clients-3"]}>
                  <img src={sherlock} alt="sherlock" className={style.sherlock}/>
                  <div className={style["clients-text"]}>
                    <h3 className={style["clients-title"]}>
                      <p>It was so simple</p>
                      <p>to use</p>
                    </h3>
                    <div className={style["clients-subtitle"]}>
                      <p>We trained a team of 30+ people to use</p>
                      the system in just a <span className={style["text-blue"]}>few hours</span>
                    </div>
                  </div>
                </div>
                <div className={style["block-clients-4"]}>
                  <img src={mbm} alt="mbm" className={style.mbm}/>
                  <div className={style["clients-text"]}>
                    <h3 className={style["clients-title"]}>
                      <p>The AI system is quick</p>
                      <p>and simple to use</p>
                    </h3>
                    <div className={style["clients-subtitle"]}>
                      <p>With a <span className={style["text-blue"]}>large database</span>large database it allows the user to build</p>
                      a technical asset register with ease
                    </div>
                  </div>
                </div>
                <div className={style["block-clients-5"]}>
                  <img src={wt} alt="wt" className={style.wt}/>
                  <div className={style["clients-text"]}>
                    <h3 className={style["clients-title"]}>
                      AI Assets gets it right
                    </h3>
                    <div className={style["clients-subtitle"]}>
                      <p>The asset register is the DNA of a building, if you get that right</p>
                      you <span className={style["text-blue"]}>can do so much with it</span>
                    </div>
                  </div>
                </div>
                <div className={style["block-clients-6"]}>
                  <img src={sydney} alt="sydney" className={style.sydney}/>
                  <div className={style["clients-text"]}>
                    <h3 className={style["clients-title"]}>
                      We see this system as the future of property technology
                    </h3>
                    <div className={style["clients-subtitle"]}>
                      That’s why <span className={style["text-blue"]}>we chose them</span> to be involved in our courses
                    </div>
                  </div>
                </div>
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

export default OurClients