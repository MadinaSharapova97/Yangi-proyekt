import styled from "styled-components";

export const StyledRegister = styled.div`
   .h1{
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 563px;
    display: none;
    h3{
     font-weight: 500;
    font-size: 24px;
    line-height: 32px;   
    }
    
   }
   h1{
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px; 
   }
   h2{
    margin-bottom: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
   }
   main{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right{
        width: 496px;
        height: 865px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        h3{
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            padding-top: 28px;
        }
        form{
            width: 336px;
            margin: 35px 80px 12px 80px;
            /* margin-bottom: 12px; */
            input{
             width: 100%;
             border-left: none;
             border-top: none;
             border-right: none;
             margin-bottom: 45px;
             border-bottom: 1px solid rgba(0, 0, 0, 0.1);
             
             ::placeholder{
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
             }
             &:focus{
            outline: none;
        }
            }
            select{
                width: 100%;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom:  1px solid rgba(0, 0, 0, 0.1);
                font-weight: 500;
                font-size: 18px;
                color: rgba(0, 0, 0, 0.6);
                cursor: pointer;
                margin-bottom: 40px;
                &:focus{
                outline: none;
           }
           option{
            font-weight: 500;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
           }
            }
            .radio{
                display: flex;
                align-items: center;
                gap: 74px;
                div{
                    display: flex;
                    gap: 14px;
                }
            }
            .checkbox{
              display: flex;
              gap: 12px;
              .check{
                width: max-content;
              }
            }
            button{
                width: 336px;
                height: 56px;
                background: #12AAE4;
                border-radius: 8px;
                border: none;
                color: #fff;
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
            }
        }
        .forgot_password{
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 16px;
            color: #666666;
            text-decoration: none;
            margin-bottom: 50px;
        }
        .register_footer{
            background: rgba(18, 170, 228, 0.1);
            .already_registered{
                padding: 14px 0 16px 0;
                display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 16px;
            color: #666666;
            text-decoration: none;
            }
            .enter{
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 24px;
                color: #12AAE4; 
                text-decoration: none;
                padding-bottom: 17px;
            }
        }
    }
   }
   @media (max-width: 376px) {
     h1,h2{
        display: none;
     }
    .h1{
        width: 320px;
        display: block;
    margin: 22px 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
   }

     .left{
        display: none;
     }
     main{
      .right{
        width: 320px;
        height: 840px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        form{
            /* border: 1px solid red; */
            width: 290px;
            margin: 0 16px 12px 16px;
               button{
            width: 100%;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #fff;
   } 
        }
     
   }  
       
     }

}
   
`