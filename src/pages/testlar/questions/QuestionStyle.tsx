import styled from "styled-components";

export const StyledQuestion = styled.div`
      background: #F6F6F9;
      /* margin-bottom: 500px; */
    main{
        display: flex;
        justify-content: space-between;
        gap: 24px;
        padding-bottom: 500px;
        .question{
            margin-top: 37px;
            width: 808px;
            height: 282px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: #fff;
            padding: 30px;
            h1{
                padding-bottom: 16px;
                border-bottom: 1px solid #F6F6F9;
                font-weight: 400;
                font-size: 18px;
                color: #313949;
            }
            .radio{
                /* border: solid 1px red; */
                display: flex;
                align-items: center;
                gap: 16px;
                p{
                    font-weight: 300;
                    font-size: 18px;
                    color: #313949;
                    
                }
            }
        }
        .count{
            margin-top: 37px;
            width: 392px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: #fff;
            padding: 20px;
            h1{
                font-weight: 400;
                font-size: 18px; 
                color: #313949;
                margin-bottom: 16px;
            }
            .count_list{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                .number{
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-radius: 50%;
                    text-align: center;
                    padding-top: 5px;
                    margin-top:12px ;
                    p{
                        font-weight: 400;
                        font-size: 16px;
                        color: #A0A4AF;
                    }
                    
                }
            }
        }
        .ishtirokchilar{
            width: 392px;
            height: 108px;
            background: #FFFFFF;
            border: 0.8px solid rgba(0, 0, 0, 0.1);
            margin-top: 7px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            section{
                text-align: center;
                h1{
                    font-weight: 500;
                    font-size: 18px;
                    color: #313949;
                    margin-bottom: 10px;
                }
                p{ 
                    font-weight: 500;
                    font-size: 12px;
                    color: #313949
                }
                button{
                    width: 136px;
                    height: 48px;
                    background: #12AAE4;
                    border-radius: 8px;
                    border: none;
                    color: #fff;
                }
            }

        }
    }
    @media (max-width: 376px) {
        main{
            display: grid;
            grid-template-columns: 1fr;
        }
        section{
           .question{
            width: 320px;
        }  
        .count{
            width: 320px;
        }
        .ishtirokchilar{
            width: 320px;
        }
        }
        
       
    }
`