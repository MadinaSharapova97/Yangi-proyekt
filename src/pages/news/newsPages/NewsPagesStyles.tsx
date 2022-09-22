import styled from "styled-components";

export const StyledPages = styled.div`
     background: #F6F6F9;
     padding: 30px 0 80px 0;
     
    main{
        padding: 20px 16px 50px 16px;
        display: flex;
        justify-content: space-between;
        background: #FFFFFF;
        border-radius: 12px;
        gap: 25px;
        .right_section{
            .text_wrapper{
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    h3{
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 32px;
                        padding: 12px 0;
                    }
            }
            h1{
                font-weight: 500;
                font-size: 36px;
                line-height: 48px;
            }
            .icon_wrapper{
                display: flex;
                gap: 32px;
                margin: 14px 0 26px 0;
                .date{
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    
                    p{
                        margin-top: 15px;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 24px;
                        opacity: 0.6;
                    }
                }
            }
            h2{
                font-weight: 600;
                font-size: 25px;
                line-height: 32px;

            }
            p{
                padding: 16px 0 16px;
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 32px;
            }
        }
        .left_section{
            
            .news_text{
                display: block;
                display: flex;
                align-items: center;
                gap: 28px;
                margin-bottom: 40px;
                font-weight: 500;
                font-size: 24px;

            }
            .card_page{
                width: 372px;
                height: 410px;
                border-radius: 12px;
                background: #F6F6F9;
                margin-bottom: 24px;
                img{
                    width: 372px;
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
            }
            .btn{
                    display :none ;
                }
        }
    }
    @media (max-width: 376px) {
        main{
            background: #F6F6F9;
            padding: 0 8px ;
            display: grid;
            grid-template-columns: 1fr;
            .right_section{
                background: #fff;
                border-radius: 12px;
                padding: 9px ;
                .text_wrapper{
                    h3{
                        font-weight: 400;
                        font-size: 17px;
                        line-height: 24px; 
                    }
                }
                width: 310px;
                img{
                   width: 300px;
                }
                         h1,h2{
                           font-weight: 600;
                           font-size: 17px;
                           line-height: 24px;
                             } 
                             p{
                                font-weight: 400;
                                font-size: 17px;
                                line-height: 24px; 
                             }
            }
            .left_section{
                /* background: #F6F6F9; */
                .news_text{
                    display: none;
                }
                .card_page{
                    width: 300px;
                    margin: 16px 0;
                    background: #fff;
                    img{
                        width: 300px;
                    }
                }
                .btn{
                    display: block;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                 button{
                    width: 92px;
                    height: 48px;
                    background: #12AAE4;
                    border-radius: 8px;
                    border: none;
                    color: #fff;
                }   
                }
                
            }
  
        }
        
    }
` 