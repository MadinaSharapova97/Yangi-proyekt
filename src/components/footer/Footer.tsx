import React, { useState } from 'react'
import { StyledFooter } from './FooterStyle'

export default function Footer() {

    const arr = [
        {
            id: 1,
            title: 'Yangiliklar',
            result: [
                {
                    text1: 'O‘qituvchilar',
                    text2: 'O‘quvchilar',
                    text3: 'Ota-onalar',
                }
            ],
        },
        {
            id: 2,
            title: 'Maktablar',
            result: [
                {
                    text1: 'Davlat maktablari',
                    text2: 'Prezident maktablari',
                    text3: 'Ijod maktablari',
                    // text4:'Xususiy maktablar'
                }
            ],
        },
        {
            id: 3,
            title: 'Olimpiyadalar',
            result: [
                {
                    text1: 'Davlat olimpiyadalari',
                    text2: 'Xalqaro olimpiyadalar',
                    text3: 'Xalqaro tanlovlar',
                    // text4:'Xususiy olimpiyadalar' 
                }
            ],
        },

    ]

    interface IArr {

        id: number,
        title: string,
        result: [
            {
                text1: string
                text2: string
                text3: string
            }
        ]
    }


    const [currentId, setCurrentId] = useState(null)

    function openBlock(id: number) {
        if (currentId === id) {
            setCurrentId(null)
            return;
        } else {
            // setCurrentId(id)
        }

    }

    return (
        <StyledFooter>
            <div className='container'>
                <div className='Footer_lists'>
                    {arr.map((i) => (
                        <ul>
                            <div className='first_div'>
                                <p>{i.title}</p>
                                <i className='icon icon-arrow-up'
                                    style={{
                                        transform: i.id === currentId ?
                                            'rotate(0deg)' : 'rotate(180deg)'
                                    }}
                                    onClick={() => openBlock(i.id)}
                                ></i>
                            </div>
                            <div>
                                {i.result.map((j) => (
                                    <div className='second_div'>
                                        <li>{j.text1}</li>
                                        <li>{j.text2}</li>
                                        <li>{j.text1}</li>
                                    </div>
                                ))}
                            </div>
                        </ul>
                    ))}
                    <div className='library'>
                        <section className='section_one'>
                            <p>Kutubxona</p>
                            <h3>Testlar</h3>
                            <h3>Imtihon</h3>
                            <h3>Hujjatlar</h3>

                        </section>
                        <section className='section_two'>
                            <div className='media'>
                                <i className='icon icon-mail'></i>
                                <p> | Registon.@gmail.uz</p>
                            </div>
                            <div className='media'>
                                <i className='icon icon-phone'></i>
                                <p> | +998 90 010-85-10</p>
                            </div>
                            <p>Ijtimoiy tarmoqlarimiz:</p>
                            <div className='social_media'>
                                <i className='icon icon-facebook'></i>
                                <i className='icon icon-telegram'></i>
                                <i className='icon icon-instagram'></i>
                                <i className='icon icon-twitter'></i>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h3>@Designer_ElyorAbdumalikov</h3>
            </div>
        </StyledFooter >

    )
}
