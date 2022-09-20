import React from 'react'
import style from '../ourClients.module.css'
import asset from '../../../images/asset-wize.png'
import woolworths from '../../../images/woolworths.png'
import sherlock from '../../../images/sherlock.png'
import mbm from '../../../images/mbm.png'
import wt from '../../../images/wt.png'
import sydney from '../../../images/sydney.png'
import "./mobileSlide.css"

function MobileSlide (props) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mobile-carousel" data-bs-ride="carousel" data-bs-interval={500000}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
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
        </div>
        <div className="carousel-item">
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
        </div>
        <div className="carousel-item">
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
        </div>
        <div className="carousel-item">
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
        </div>
        <div className="carousel-item">
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
        </div>
        <div className="carousel-item">
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

  )
}

export default MobileSlide