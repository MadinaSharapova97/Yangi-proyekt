import React from 'react'
import { Link } from 'react-router-dom'
import { StyledPAssword } from './PasswordModalStyle'
import Pincode from './pincode/Pincode'

interface IOnclose {
    onClose: () => void
}

export default function PasswordModal({ onClose }: IOnclose) {
    return (
        <StyledPAssword>
            <div className='modal_wrapper'>
                <div className='pincode'>
                    <div>
                        <h3>Parolni kiriting</h3>
                        <p>+998 90 010 85-10 shu raqamga
                            kod yuborildi</p>
                        <Pincode />
                    </div>
                    <Link to="">Sms ni qayta yuborish </Link><br />
                    <button type='button' onClick={onClose}>Kirish</button>


                </div>

            </div>

        </StyledPAssword>
    )
}
