import React from 'react'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import reg from '../../assets/images/registration.png'

//
import { StyledHome } from './HomeStyle'
import Carousel from '../../carousel/Carousel'
import Card from '../../components/cards/Card'

export default function Home() {
    return (
        <>


            <StyledHome>
               <div className='registration'>
                    <div className="container">
                        <div className="card_reg">
                            <img src={reg} alt="" />
                            <h1>Kirish yoki ro‘yxatdan
                                o‘tish</h1>
                            <p>Ro‘yxatdan o‘t va imtihonlarga qanchalik
                                tayyor ekanligingni bilib ol</p>
                                <div>
                                 <button type='submit'>Ro'yxatdan o'tish</button>                                   
                                </div>

                                <h2>Yangiliklar</h2>
                        </div>
                    </div>

                </div>
 
                <div className='container'>
                    {/* <div className='registration'>
                        <div className="card_reg">
                            <img src={reg} alt="" />
                            <h1>Kirish yoki ro‘yxatdan
                                o‘tish</h1>
                            <p>Ro‘yxatdan o‘t va imtihonlarga qanchalik
                                tayyor ekanligingni bilib ol</p>
                        </div>
                    </div> */}
                    <div className='main_list'>
                        <div className='card_home'>
                            <img src={img1} alt="" /> <br />
                            <button type='button'>Ota-ona</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        {/* <Card prop={img1}/> */}
                        <div className='card_home'>
                            <img src={img2} alt="" /> <br />
                            <button type='button'>O'qituvchilar</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='card_home'>
                            <img src={img3} alt="" /> <br />
                            <button type='button'>O'quvchilar</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='card_home'>
                            <img src={img4} alt="" /> <br />
                            <button type='button'>Ota-ona</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='card_home'>
                            <img src={img5} alt="" /> <br />
                            <button type='button'>O'qituvchilar</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='card_home'>
                            <img src={img6} alt="" /> <br />
                            <button type='button'>O'quvchilar</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                    </div>
                </div>
            </StyledHome>
            <Carousel />
        </>

    )
}
