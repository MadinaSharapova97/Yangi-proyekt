import React, { useEffect } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 

const customStyle = {
    content: {

        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        minHeight: "120px",
        minWidth: "311px"

    },
}

interface IModal {
    modal2: boolean
    setModal2: () => void
}

export default function Modal2({ modal2 }: IModal) {

    useEffect(() => {
        ReactModal.setAppElement("body")
    }, [])

    return (
        <ReactModal
            isOpen={modal2}
            style={customStyle}
            ariaHideApp={false}
        >
            <StyledModal2>
                <h1>Test natijalari</h1>
                <div className='natijalar'>
                    <section>
                        <p>Savollar</p>
                        <h2 style={{color:'#F4900C'}}>30 ta</h2>
                    </section>
                    <section>
                    <p>Sarflangan vaqt</p>
                        <h2 style={{color:'#9266CC'}}>0 min</h2>
                    </section>
                    <section>
                    <p>To‘g‘ri javoblar</p>
                        <h2 style={{color:'#57BF6E'}}>0 ta</h2>
                    </section>
                    <section>
                    <p>Natija%</p>
                        <h2 style={{color:'#2681FF'}}>0 %</h2>
                    </section>
                </div>
                <div className='btn'>
                    <button><Link to='table'>Test natijalar jadvali</Link></button>
                    <button><Link to='tests'>Testdan chiqish</Link></button>
                    <button><Link to='tests'>Qayta topshirish</Link></button>
                </div>
            </StyledModal2>


        </ReactModal>
    )
}
const StyledModal2 = styled.div`
      
   /* text-align: center; */
   h1{
    font-weight: 500;
    font-size: 32px;
    color: #313949;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .natijalar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 32px 48px;
    margin: 30px;
    section{
        text-align: center;
        p{
            margin-bottom: 24px;
            font-weight: 400;
            font-size: 16px;
        }
    }
   }
   .btn{
    margin: 0 30px;
    display: flex;
    justify-content: end;
    gap: 24px;
    button{
        width: 205px;
        height: 56px;
        background: #F6F6F9;
        border-radius: 8px;
        border: none;
    }
   }
   @media (max-width: 376px) {
    .natijalar{
        border: none;
        display: grid;
        padding: 10px;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 10px;
        /* margin: 20px; */
        section{
            position: relative;
            width: 90px;
            height:90px;
        p{
            font-size: 14px;
            margin: 0;
        }
        h2{
            position: absolute;
            bottom: 20px;
            left: 20px;
        }
        }
    }
    .btn{
        margin: 0 10px;
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        button{
            width: 140px;
            height: 40px;
        }
    }
   }
`
