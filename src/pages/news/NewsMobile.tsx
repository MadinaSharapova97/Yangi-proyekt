import React from 'react'
import { StyledMobile } from './NewsMobileStyle'
import {Link} from 'react-router-dom'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
// import img7 from '../../assets/images/img7.png'

export default function NewsMobile() {
    return (
        <StyledMobile>
            <div className="container">

                <div className='news_text1'>
                    <i className='icon icon-ellipse'></i>
                    <p>Yangiliklar</p>
                </div>

                <div className='main_list_mobile'>
                    <div className='card'>
                        <img src={img4} alt="" /> <br />
                        <button type='button'><Link to={'newsPages'}>Ota-ona</Link></button>
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

                <div className='news_text1'>
                    <i className='icon icon-ellipse'></i>
                    <p>Ommabop</p>
                </div>

                <div className='yangiliklar_mobile'>
                    <section className='bottom_card'>
                         <div className="cards">
                            <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                                joyga ko‘chiriladi</h3>
                            <p>22:25 | 09.12.2021</p>
                        </div>
                        <div className="cards">
                            <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                                joyga ko‘chiriladi</h3>
                            <p>22:25 | 09.12.2021</p>
                        </div>
                        <div className="cards">
                            <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                                joyga ko‘chiriladi</h3>
                            <p>22:25 | 09.12.2021</p>
                        </div>
                        <div className="cards">
                            <h3>Qo‘y bozori ko‘chirilishi munosabati bilan “pitak” yangi <br />
                                joyga ko‘chiriladi</h3>
                            <p>22:25 | 09.12.2021</p>
                        </div>   
                    </section>
                    
                  
                </div>

                <div className='btn'>
                    <button type='submit'>Yana</button>
                </div>
            </div>



        </StyledMobile >
    )
}
