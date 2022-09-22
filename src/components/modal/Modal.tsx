import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import Modal2 from '../modal2/Modal2'


const customStyle = {
    content: {
        
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        minHeight: "120px",
        minWidth:"311px"

    },
}

interface IModal {
    modal: boolean
    setModal: () => void
}
export default function Modal({ modal, setModal }: IModal) {

    useEffect(() => {
        ReactModal.setAppElement("body")
    }, [])

    const [modal2, setModal2] = useState(false)

    return (
        <ReactModal
            isOpen={modal}
            style={customStyle}
            ariaHideApp={false}
        >
            <StyledModal>
                <h1>Testni yakunlaysizmi?</h1>
                <div>
                    <button
                        style={{ background: '#F6F6F9', color: '#000' }}
                        onClick={setModal}
                    >
                        Yo'q</button>
                    <button onClick={() => setModal2(true)}>Ha</button>
                </div>
            </StyledModal>
            <Modal2 modal2={modal2} setModal2={() => setModal2(false)}/>
        </ReactModal>
    )
}


const StyledModal = styled.div`
    text-align: center;
    h1{
        font-weight: 500;
        font-size: 32px;
        color: #313949;
        margin-bottom: 60px;
    }
    div{
        display: flex;
        gap: 24px;
        justify-content: center;
        button{
            width: 205px;
            height: 56px;
            background: #12AAE4;
            border-radius: 8px;
            border: none;
            color: #fff;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
    }
    @media (max-width: 376px) {
        h1{
            font-weight: 500;
            font-size: 20px;
        }
    }
`