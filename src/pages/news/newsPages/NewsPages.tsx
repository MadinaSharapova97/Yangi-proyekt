import React from 'react'
import img1 from '../../../assets/images/img1.png'
import img2 from '../../../assets/images/img2.png'
import img3 from '../../../assets/images/img3.png'
import img8 from '../../../assets/images/img8.png'
import { StyledPages } from './NewsPagesStyles'

export default function NewsPages() {
    return (
        <StyledPages>
            <div className='container'>
                <main>
                    <section className='right_section'>
                        <h1>Termiz muhandistlik-texnologiya instituti <br />
                            tashkil etildi</h1>
                        <div className='icon_wrapper'>
                            <div className='date'>
                                <i className='icon icon-date'></i>
                                <p>04-dekabr 18:34</p>
                            </div>
                            <div className='date'>
                                <i className='icon icon-eye'></i>
                                <p>1243</p>
                            </div>
                        </div>
                        <img src={img8} alt="img" />
                        <h2>Prezident qarori bilan Toshkent davlat texnika universiteti Termiz filiali <br />
                            negizida Termiz muhandislik-texnologiya instituti tashkil </h2>
                        <p>2021 yil 3 dekabrda imzolangan qarorga ko‘ra, zamonaviy texnologiyalar <br />
                            bo‘yicha chuqur bilimga ega mutaxassislarni tayyorlash, qayta tayyorlash va <br />
                            ularning malakasini oshirish institutning asosiy faoliyat yo‘nalishlaridan biri <br />
                            sanaladi.</p>
                        <p>Institut davlat oliy ta’lim muassasasi hisoblanib, Toshkent davlat texnika <br />
                            universiteti Termiz filiali talabalari tahsil olayotgan bakalavriat ta’lim <br />
                            yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha institutda o‘qishni <br />
                            davom ettiradi.</p>

                        <h2>Institut jumladan</h2>
                        <div className='text_wrapper'>
                            <i className='icon icon-ellipse'></i>
                            <h3>xalqaro reytingda birinchi 1 000 talikka kirgan xorijiy OTMning dasturi <br />
                                asosida o‘z ta’lim dasturlarini shakllantiradi;</h3>
                        </div>
                        <div className='text_wrapper'>
                            <i className='icon icon-ellipse'></i>
                            <h3>ish beruvchilar talablaridan kelib chiqib o‘quv rejalaridagi nazariy ta’lim <br />
                                ulushini qisqartirish hisobiga amaliy mashg‘ulotlar hajmi oshiriladi;</h3>
                        </div>
                        <div className='text_wrapper'>
                            <i className='icon icon-ellipse'></i>
                            <h3>institut faoliyati yo‘nalishlari bo‘yicha maslahat va ekspert-tahliliy <br />
                                xizmatlarni samarali amalga oshirish uchun ilmiy-tadqiqot va <br />
                                innovatsion xizmat ko‘rsatuvchi korxonalarni tashkil etadi.</h3>
                        </div>
                        <p>Qayd etilishicha, institutning ilmiy salohiyatini oshirish maqsadida 2022/2023 <br />
                            o‘quv yilidan yetakchi OTMda tegishli magistratura mutaxassisliklari va 2023 <br />
                            yildan tayanch doktoranturada kadrlarni maqsadli tayyorlash choralari ko‘riladi.</p>
                    </section>
                    <section className='left_section'>
                        <div className='news_text'>

                            <i className='icon icon-ellipse'></i>
                            <p>Ommabop</p>
                        </div>
                        <div className='card_page'>
                            <img src={img1} alt="" /> <br />
                            <button type='button'>Ota-ona</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='card_page'>
                            <img src={img2} alt="" /> <br />
                            <button type='button'>Ota-ona</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='card_page'>
                            <img src={img3} alt="" /> <br />
                            <button type='button'>Ota-ona</button>
                            <h3>Termiz muhandistlik-texnologiya <br />
                                instituti tashkil etildi</h3>
                            <p>19:01 | 10-12-2021</p>
                        </div>
                        <div className='btn'>
                            <button type='submit'>Yana</button>
                        </div>

                    </section>

                </main>
            </div>
        </StyledPages>

    )
}
