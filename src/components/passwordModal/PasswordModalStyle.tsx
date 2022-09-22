import styled from "styled-components";
export const StyledPAssword = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100vh;
    background: rgba(4, 4, 4, 0.5);
    /* opacity: 0.6; */
    transform: translateY(50%,50%);
    display: flex;
    align-items: center;
    justify-content: center;
    &>.modal_wrapper{
        width: 600px;
        height: 650px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        &>.pincode{
            text-align: center;
            &>div{
            padding-bottom: 50px;
            h3{
                font-weight: 500;
                font-size: 24px;
            }
            p{
                font-weight: 500;
                font-size: 16px;
                opacity: 0.6;
                margin-bottom: 50px;
            }

            }
            a{
                font-weight: 500;
                font-size: 16px;
                color: #12AAE4;
                text-decoration: none;
            }
            button{
                margin-top: 20px;
                width: 392px;
                height: 56px;
                background: #12AAE4;
                border-radius: 12px;
                border: none;
                color: #fff;
                font-weight: 500;
                font-size: 18px;
            }
        }
    }
    @media (max-width: 376px) {
        .modal_wrapper{
           width: 335px;
           height: 369px;
           .pincode{
            button{
                width: 271px;
                height: 48px;
            }
           }
        }
    }
    
`