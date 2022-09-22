import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Password() {
  return (
    <StyledPassword>
         
                        <h3>Ro'yxatdan o'ting </h3>
                        <form className='needs-validation was-validated' noValidate>
                            <input type="phone" name='+998' />
                            <div className='invalid-feedback'></div>
                            <input type="password" className='form-control' placeholder='Ism'  />
                            <div className="invalid-feedback">Noto'g'ri</div>
                            <button type='submit'>Kirish</button>
                        </form>
                        <Link to='' className='forgot_password'> Parolni unutdingizmi</Link>
                        <div className='register_footer'>
                            <Link to='' className='already_registered'>
                                Yangi foydalanuchimisiz
                            </Link>
                            <Link to='' className='enter'>Ro'yxatan o'tish</Link>
                        </div>
                    
        
    </StyledPassword>
  )
}
const StyledPassword = styled.div`
               width: 496px;
               height: 585px;
               border: 1px solid rgba(0, 0, 0, 0.1);
               h3{
                margin-top: 27px;
                display: flex;
                align-items: center;
                justify-content: center;
                 font-weight: 500;
                 font-size: 24px;
              }
             form{
            /* border: 1px solid red; */
            width: 336px;
            margin: 35px 80px 12px 80px;

         input{
             width: 100%;
             border-left: none;
             border-top: none;
             border-right: none;
             margin-bottom: 45px;
             border-bottom: 1px solid rgba(0, 0, 0, 0.1);
             
             ::placeholder{
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
             }
             &:focus{
            outline: none;
        }
            }      
               button{
                width: 336px;
                height: 56px;
                background: #12AAE4;
                border-radius: 8px;
                border: none;
                color: #fff;
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                margin-top: 50px;
   } 
        }  
        .forgot_password{
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 16px;
            color: #666666;
            text-decoration: none;
            margin-bottom: 50px;
        }
        .register_footer{
            background: rgba(18, 170, 228, 0.1);
            .already_registered{
                padding: 14px 0 16px 0;
                display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 16px;
            color: #666666;
            text-decoration: none;
            }
            .enter{
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 24px;
                color: #12AAE4; 
                text-decoration: none;
                padding-bottom: 17px;
            }
        } 
        @media (max-width: 376px) {
            width: 320px;
            height:520px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            form{
            /* border: 1px solid red; */
            width: 290px;
            margin: 0 16px 12px 16px;
               button{
            width: 100%;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #fff;
   } 
        }
        }          
    
 
`
