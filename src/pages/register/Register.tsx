import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledRegister } from './RegisterStyle'
import illustration from '../../assets/images/Illustration.png'
import PasswordModal from '../../components/passwordModal/PasswordModal'
import Password from './password/Password'

export default function Register() {

    const [isModalOPen, setIsModalOPen] = useState(false)

    return (
        <StyledRegister>
            <div className="container">
                <div className='h1'>
                    <h3>Sayt imkoniyatlaridan to‘liq foydalanish uchun
                        Ro‘yxatdan o‘ting
                    </h3>
                </div>
                <h1>Sayt imkoniyatlaridan to‘liq foydalanish uchun</h1>
                <h2>Ro‘yxatdan o‘ting</h2>

                <main>
                    {/* <Password/> */}
                    <section className='right'>
                        <h3>Ro'yxatdan o'ting </h3>
                        <form>
                            <input type="phone" name='+998' />
                            <input type="text" placeholder='Ism' />
                            <input type="text" placeholder='Familiya' />
                            <select>
                                <option value="Buxoro">Toshkent</option>
                                <option value="Samarqand">Samarqand</option>
                                <option value="Toshkent">Buxoro</option>
                            </select>
                            <select>
                                <option value="Buxoro">Kategoriya</option>
                                <option value="Samarqand">Samarqand</option>
                                <option value="Toshkent">Buxoro</option>
                            </select>
                            <div className='radio'>
                                <div>
                                    <input type="radio" />
                                    <p>Erkak</p>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <p>Ayol</p>
                                </div>

                            </div>
                            <input type="text" placeholder='Yosh' />
                            <div className='checkbox'>
                                <input type="checkbox" className='check' />

                                <p>Saytdan foydalanish shartlariga roziman</p>
                            </div>
                            

                            <button type='submit'>Ro'yxatdan o'tish</button>
                        </form>
                        <Link to='' className='forgot_password'> Parolni unutdingizmi</Link>
                        <div className='register_footer'>
                            <Link to='' className='already_registered'>
                                Men allaqachon ro'yxatdan o'tganman
                            </Link>
                            <Link to='' className='enter'>Kirish</Link>
                        </div>
                    </section>
                    <section className='left'>
                        <img src={illustration} alt="" />
                    </section>
                </main>

            </div>
            {isModalOPen ? <PasswordModal onClose={() => setIsModalOPen(false)} /> : null}

        </StyledRegister>
    )
}
