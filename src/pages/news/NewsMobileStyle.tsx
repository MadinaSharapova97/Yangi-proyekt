import styled from "styled-components";

export const StyledMobile = styled.div`
       @media (max-width: 376px) {         
            .news_text1{
                display: flex;
                gap: 16px;
                align-items: center;
                padding: 50px 0 14px 0;
                p{
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 32px;
                }
            }
            .main_list_mobile{
                display: grid;
                grid-template-columns: 1fr;
                gap: 16px;
                .card{
                width: 312px;
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
            }
                img{
                    width: 312px;
                }
                
            }
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
            margin-bottom: 80px;
            cursor: pointer;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }  
          
        }
        .yangiliklar_mobile{
            .bottom_card{
                background: #FFFFFF;
                border-radius: 12px;
                /* padding: 12px; */
                .cards{
                    width: 315px;
                    border-bottom:  1px solid rgba(49, 57, 73, 0.1);
                    margin-right: 10px;
                    padding: 12px;
                    h3{
                        font-weight: 400;
                        font-size: 17px;

                    }
                    p{
                        padding-top: 8px;
                        font-weight: 400;
                        font-size: 12px;
                        color: rgba(0, 0, 0, 0.6);
                    }
                }
            }
        }

        }
` 