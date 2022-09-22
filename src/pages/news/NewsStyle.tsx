import styled from "styled-components";

export const StyledNews = styled.div`
       background: #F6F6F9;
       .main_news{
        padding: 70px 0 90px 0;
        .btn{
            
            display: flex;
            align-items: center;
            justify-content: center;
          button{
            margin-top: 13px;
            width: 128px;
            height: 56px;
            background: #12AAE4;
            border-radius: 8px;
            border: none;
            color: #FFF;
        }  
          
        }
       }
      .news{
        display: flex;
        gap: 575px;
        margin-bottom: 28px;
        .news_text1,.news_text2{
            display: flex;
            gap: 16px; 
            align-items: center;
            p{
                font-weight: 500;
                font-size: 24px;
                line-height: 32px;
            }         
            img{
                width: 12px;
                height: 12px;
            }
        }
        
    }
    .yangiliklar{
            display: flex;
            padding: 8px;
            background: #FFFFFF;
            border-radius: 12px;
            h2{
                font-weight: 500;
                font-size: 20px;
                padding: 8px 0 8px 0;
            }
            p{
                font-weight: 400;
                font-size: 14px;
                opacity: 0.6;
            }
            .right_card{
                padding: 12px 24px 0 24px;
                .card_news{
                    border-bottom:  1px solid rgba(49, 57, 73, 0.1);
                    width: 472px;
                    h3{
                        padding-top: 16px;
                        font-weight: 500;
                        font-size: 19px;
                        line-height: 24px;
                    }
                    p{
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 24px;
                        color: rgba(0, 0, 0, 0.6);
                        padding: 12px 0 8px 0;
                    }
                }
            }
        }
        .main_list{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            gap: 24px;
            padding: 40px 0;
            .card{
                /* width: 392px;
                height: 410px;
                border-radius: 12px;
                background: #fff; */
                width: 382px;
                height: 420px;
                border-radius: 12px;
                background: #fff;
                    img{
                      width: 382px;
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
        }
        .mobile_news{
               display: none ;
                }

        @media (max-width: 376px) {
            .main_news{
                display: none;                
            }
               .mobile_news{
                   display :block ;
                }


        }
`