import React from 'react'
import styled from 'styled-components'
import img4 from '../../assets/images/img4.png'

interface IProp{
    img:string
}

export default function Card() {
    return (
        <StyledCard>
            <img src={img4} alt="" /> <br />
            <button type='button'>Ota-ona</button>
            <h3>Termiz muhandistlik-texnologiya <br />
                instituti tashkil etildi</h3>
            <p>19:01 | 10-12-2021</p>
        </StyledCard>
    )
}
const StyledCard = styled.div`
        width: 392px;
        height: 410px;
        border-radius: 12px;
        background: #fff;
        button{
        width: 103px;
        height: 32px;
        background: #fff;
        border: 1px solid rgba(49, 57, 73, 0.1);
        color: #EC1212;
        margin: 16px 0 12px 16px;
    }
    h3{
        margin-left: 16px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }
    p{
        margin-left: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        margin-top: 32px;
    }
`
