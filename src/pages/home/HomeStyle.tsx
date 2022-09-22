import styled from 'styled-components'

export const StyledHome = styled.div`
background: #F6F6F9;
.registration{
    display: none;
}
.main_list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 24px;
    padding: 40px 0 ;
}
.card_home{
    width: 382px;
    height: 410px;
    border-radius: 12px;
    background: #fff;
    img{
        width: 382px;
    }
}
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
    @media (max-width:376px) {

        .registration{
            width: 100%;
            display:block;
            width: 317px;
            background-color: #fff;
    .card_reg{
        width: 330px;
        background-color: #fff;
        padding-right: 16px;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        button{
            width: 271px;
            height: 48px;
            background: #12AAE4;
            border-radius: 8px;
            color: #fff;
            margin: 40px 0 70px 0;
        }
        h2{
            font-weight: 500;
            font-size: 28px;
            color: #313949;
            padding-bottom: 28px;
        }
        h1{
            padding-top: 28px;
            font-weight: 500;
            font-size: 28px;
            line-height: 32px;
        }
        p{
            margin-left: 0;
            font-weight: 400;
            font-size: 16px;
            color: #313949;
        }
      img{
        width: 317px;
      }
    }
}

        .main_list{       
            display: grid;
            grid-template-columns: 1fr;
            .card_home{
                width:312px ;
                /* border: solid 1px gold; */
            }
            img{
                width: 312px;
            }
        }
    }
`