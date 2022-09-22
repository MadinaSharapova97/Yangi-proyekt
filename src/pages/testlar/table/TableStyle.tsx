import styled from "styled-components";

export const StyledTable = styled.div`
    background: #F6F6F9;
    padding: 70px 0;
   .wrapper{
      width: 1016px;
      background: #FFFFFF;
      border: 1px solid rgba(49, 57, 73, 0.1);
      margin: 0 auto;
      .table_list{
        padding: 32px;
        h2{
            font-weight: 500;
            font-size: 24px;
            margin-bottom: 40px;
        }
        table{
            width: 100%;
            margin-bottom: 26px;
            tr{
                display: flex;
                justify-content: space-between;
                th{
                    font-weight: 500;
                    font-size: 20px;
                    color: #313949;
                }
                td{
                    color: #313949;
                    opacity: 0.8;
                    font-weight: 500;
                    font-size: 18px;

                }
                .visibled_text{
                    display: block;
                }
            }
        }
        .natijalar{
            display: flex;
            justify-content: space-between;
        }
      }
   } 
   .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 32px;
    button{
        width: 200px;
        height: 56px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
        font-weight: 400;
        font-size: 18px;
        color: #313949;
    }
   }
   @media (max-width:375px) {
    /* h2{

    } */
     .wrapper{
        width: 330px;
        h2{
         padding: 0 0 0 20px;
         }
        .table_list{
            padding: 24px 0 0 0;
            table{
                tr{
                    .visibled_text{
                        display: none;

                    }
                }
            }
          .natijalar{
              display: grid;
              grid-template-columns: 1fr;   
              justify-content: center;
              padding: 0 0 0 20px;
              }    
          }
       
     }
    
   }
`