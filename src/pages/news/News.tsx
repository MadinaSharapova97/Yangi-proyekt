import React, { useState } from 'react'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import img7 from '../../assets/images/img7.png'
import NewsMobile from './NewsMobile'
import { StyledNews } from './NewsStyle'

//
import NewsPages from './newsPages/NewsPages'
import { Link } from 'react-router-dom'

export default function News() {

  return (
    <StyledNews>
      <div className="container">
        <div className='main_news'>
          <div className='news'>
            <div className='news_text1'>
              <i className='icon icon-ellipse'></i>
              <p>Yangiliklar</p>
            </div>
            <div className="news_text2">
              <i className='icon icon-ellipse'></i>
              <p>Ommabop</p>
            </div>
          </div>

          <div className='yangiliklar'>
            <section className=''>
              <img src={img7} alt="ponarama" />
              <h2>Samarqandda premium halol PONARAMA restoranining <br />
                ochilishi bo‘lib o‘tdi...</h2>
              <p>10 dekabr, soat 13:00</p>
            </section>
            <section className='right_card'>
              <div className="card_news">
                <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                  joyga ko‘chiriladi</h3>
                <p>22:25 | 09.12.2021</p>
              </div>
              <div className="card_news">
                <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                  joyga ko‘chiriladi</h3>
                <p>22:25 | 09.12.2021</p>
              </div>
              <div className="card_news">
                <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                  joyga ko‘chiriladi</h3>
                <p>22:25 | 09.12.2021</p>
              </div>
              <div className="card_news">
                <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                  joyga ko‘chiriladi</h3>
                <p>22:25 | 09.12.2021</p>
              </div>
            </section>
          </div>
          <div className='main_list'>
            <div className='card'>
              <img src={img4} alt="" /> <br />
              <button type='button'><Link to='news_pages'>Ota-ona</Link> </button>
              <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
              <p>19:01 | 10-12-2021</p>
            </div>
            <div className='card'>
              <img src={img5} alt="" /> <br />
              <button type='button'>Ota-ona</button>
              <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
              <p>19:01 | 10-12-2021</p>
            </div>
            <div className='card'>
              <img src={img6} alt="" /> <br />
              <button type='button'>Ota-ona</button>
              <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
              <p>19:01 | 10-12-2021</p>
            </div>
            <div className='card'>
              <img src={img1} alt="" /> <br />
              <button type='button'>Ota-ona</button>
              <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
              <p>19:01 | 10-12-2021</p>
            </div>
            <div className='card'>
              <img src={img2} alt="" /> <br />
              <button type='button'>Ota-ona</button>
              <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
              <p>19:01 | 10-12-2021</p>
            </div>
            <div className='card'>
              <img src={img3} alt="" /> <br />
              <button type='button'>Ota-ona</button>
              <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
              <p>19:01 | 10-12-2021</p>
            </div>
          </div>
          <div className='btn'>
            <button type='button'>Yana</button>
          </div>
        </div>

        {/* news mobile version */}

      </div>
      <div className='mobile_news'>
          <NewsMobile/>
      </div>
      
    </StyledNews>
  )
}
