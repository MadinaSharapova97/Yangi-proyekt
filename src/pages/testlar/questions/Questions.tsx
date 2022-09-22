import React, { useState } from 'react'
import Modal from '../../../components/modal/Modal'
import { StyledQuestion } from './QuestionStyle'

export default function Questions() {

    const arr = [
        "1", "2", "3", "4", "5", "6", "7",
        "8", "9", "10", "11", "12", "13", "14",
        "15", "16", "17", "18", "19", "20", "21",
        "22", "23", "24", "25", "26", "27", "28",
]

const [modal , setModal] = useState(false)

    return (
        <StyledQuestion>
            <div className="container">
                <main>
                    <section>
                        <div className='question'>
                            <h1>1. Qaysi so‘z bu yerda ortiqcha?</h1>
                            <div className='radio'>
                                <input type="radio" />
                                <p>It</p>
                            </div>
                            <div className='radio'>
                                <input type="radio" />
                                <p>Silovsin</p>
                            </div>
                            <div className='radio'>
                                <input type="radio" />
                                <p>Yo'bars</p>
                            </div>
                            <div className='radio'>
                                <input type="radio" />
                                <p>Mushuk</p>
                            </div>
                        </div>
                        <div className='question'>
                            <h1>1. Qaysi so‘z bu yerda ortiqcha?</h1>
                            <div className='radio'>
                                <input type="radio" />
                                <p>It</p>
                            </div>
                            <div className='radio'>
                                <input type="radio" />
                                <p>Silovsin</p>
                            </div>
                            <div className='radio'>
                                <input type="radio" />
                                <p>Yo'bars</p>
                            </div>
                            <div className='radio'>
                                <input type="radio" />
                                <p>Mushuk</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='count'>
                            <h1>Matematika</h1>
                            <div className='count_list'>
                                {arr.map((i) => (
                                 <div className='number'>                                    
                                    <p>{i}</p>                                        
                                </div>   
                                ))}
                                
                            </div>
                        </div>
                        <div className='ishtirokchilar'>
                            <section>
                                <h1>00:59:59</h1>
                                <p>Qolgan vaqt</p>
                            </section>
                            <section>
                                <h1>600</h1>
                                <p>Ishtirokchilar</p>
                            </section>
                            <section>
                                <button type='submit' onClick={() => setModal(true)}>Yakunlash</button>
                            </section>
                        </div>
                    </section>
                </main>
            </div>
            <Modal modal={modal} setModal={() => setModal(false)}/>
        </StyledQuestion>
    )
}
