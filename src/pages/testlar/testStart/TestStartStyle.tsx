import styled from "styled-components";

export const StyledStart = styled.div`
      background: #F6F6F9;
    .wrapper{
        .visible_text{
          display: none;
        }
        width: 1016px;
        margin: 0 auto;
        padding: 32px 0 200px 0;
        row-gap: 42px;
        .one{
            display: block;
            padding: 30px 0 70px 30px;
            width: 1016px;
            background: #fff;
            margin-bottom: 42px;
            h1{
                font-weight: 500;
                font-size: 40px;
                color: #313949;
                text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 2px 0px 4px rgba(0, 0, 0, 0.06);
                margin-bottom: 31px;
            }
            p{
                font-weight: 400;
                font-size: 24px;
                color: #313949;
            }
        }
        .two{
            padding: 30px ;
            width: 1016px;
            background: #E7F7FC;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 42px;
            .information{
                text-align: center;
                p{
                    font-weight: 400;
                    font-size: 24px;
                    color: #313949;
                    margin-bottom: 40px;
                }
                h1{
                    font-weight: 600;
                    font-size: 40px;
                }
            }
        }

        .btn{
            display: flex;
            gap: 24px;
            justify-content: end;
            .first{
                width: 200px;
                height: 56px;
                background: #12AAE4;
                border-radius: 8px;
                border: none;
                color: #fff;
                font-weight: 500;
                font-size: 18px;
            }
            .second{
                width: 200px;
                height: 56px;
                background: #fff;
                border-radius: 8px;
                border: none;
                color: #313949;
                font-weight: 500;
                font-size: 18px;  
            }
        }
    }

    @media (max-width: 376px) {
        .wrapper{
            width: 346px;
            padding: 40px 16px;
            .visible_text{
                display: block;
                h1{
                    font-weight: 500;
                    font-size: 28px;
                    color: #313949;
                    margin-bottom: 8px;
                }
                p{
                    font-weight: 400;
                    font-size: 18px;
                    color: #313949;
                    margin-bottom: 32px;
                }
            }
         .one{
            display: none;
        }
        .two{
            width: 314px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            .information{
                p{
                    font-weight: 400;
                    font-size: 18px;
                }
                h1{
                    font-weight: 600;
                    font-size: 24px;

                }
            }
        }   
        .btn{
            width: 314px;
            .first,.second{
                width: 162px;
                height: 48px;
                font-weight: 400;
                font-size: 16px;
            }
        }
        }
        
    }
`