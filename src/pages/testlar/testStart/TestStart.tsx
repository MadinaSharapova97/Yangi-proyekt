import React from 'react'
import { Link } from 'react-router-dom'
import { StyledStart } from './TestStartStyle'

export default function TestStart() {
    return (
        <StyledStart>
            <div className="wrapper">
                <div className='visible_text'>
                    <h1>Matematika</h1>
                    <p>Bob yoki mavzu nomlari keltiriladi</p>
                </div>
                <section className='one'>
                    <h1>Matemetika</h1>
                    <p>Bob yoki mavzu nomlari keltiriladi</p>
                </section>
                <section className='two'>
                    <div className='information'>
                        <p>Ishtirokchilar</p>
                        <h1 style={{ color: '#57BF6E' }}>200</h1>
                    </div>
                    <div className='information'>
                        <p>Savollar soni</p>
                        <h1 style={{ color: '#9266CC' }}>20</h1>
                    </div>
                    <div className='information'>
                        <p>O‘rtacha natija</p>
                        <h1 style={{ color: '#2681FF' }}>45.12%</h1>
                    </div>
                    <div className='information'>
                        <p>Maksimal natija</p>
                        <h1 style={{ color: '#F3900C' }}>90%</h1>
                    </div>
                </section>

                <div className='btn'>
                    <button className='first'><Link to='questions'>Testni boshlash</Link></button>
                    <button className='second'><Link to='table'>Test natijalar jadvali</Link></button>
                </div>
            </div>
        </StyledStart>
    )
}
