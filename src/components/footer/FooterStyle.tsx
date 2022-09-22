import styled from "styled-components";

export const StyledFooter = styled.div`
    background: #12AAE4;
    color: #fff;
    padding: 27px 0 40px 0;
    hr{
        padding: 40px 0 12px 0;
        opacity: 0.2;
    }
    h3{
        padding-top: 12px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    }
    .Footer_lists{
        display: flex;
        justify-content: space-between;
        ul{
            i{
                display: none;
            }
            display: flex;
            flex-direction: column;
            gap: 16px;
            p{
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
            }
            li{
                font-weight: 400;
                font-size: 16px;
                opacity: 0.8;
                padding: 10px 0 10px 0;
               
    }
    
        }
        .library{
        display: flex;
        gap: 98px;
        h3{
            font-weight: 500;
            font-size: 18px;
            color: #FFFFFF;
            opacity: 0.8;
        }
    }
        section{
            .media{
                display: flex;
                align-items: center;
                margin-bottom: 32px;
              p{
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
            }  
            }
        }
        p{
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
            .social_media{
             margin-top: 12px;
             width: 158.25px;
             display: flex;
             flex-direction: row;
             gap: 24px;
            }
    }


    @media (max-width: 376px) {
     .Footer_lists{
        display :grid ;
        grid-template-columns: 1fr;
        position: relative;
        .first_div{
            display: flex;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);           
            justify-content: space-between;
            width: 310px;
            position: relative;
            i{
                position: absolute;
                display: block;
                right: 10px;
                bottom: 7px;
            }
            p{
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            padding-top: 20px;
        }
        
        }
        .library{
            width: 310px;
            gap: 52px;
            section {
             padding-top: 32px;
             
            }
        }
    }   
    }
    
`