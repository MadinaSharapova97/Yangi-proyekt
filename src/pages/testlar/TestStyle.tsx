import styled from "styled-components";

export const StyledTests = styled.div`
    .selects{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 83px 0 55px 0;
    }
    .tests{     
       .card_tests{
        display: flex;
        justify-content: space-between;
        padding: 48px;
        background: #fff;
        margin-bottom: 12px;
        h3{
            font-weight: 500;
            font-size: 20px;
            color: #313949;
            margin-bottom: 32px;
        }
        button{
            width: 148px;
            height: 56px;
            background: #F3F3F3;
            border-radius: 8px;
            border: none;
            font-weight: 500;
            font-size: 18px;
            color: #313949;
        }
    }         
        }
    
    
    

@media (max-width: 376px) {
    .selects{
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .tests{
        .container{
         .card_tests{
            padding:  16px;
            button{
                width: 140px;
                height: 40px;
            }
        }   
        }
        
    }
}

    .tests{
        padding: 41px 0 58px 0;
        background: #F6F6F9;
        h1{
            font-weight: 500;
            font-size: 32px;
            line-height: 39px;
            padding-bottom: 28px;
        }
        .card{
            background: #fff;
            padding: 32px 48px 32px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            h3{
                font-weight: 500;
                font-size: 20px;
                color: #313949;
                padding-bottom: 32px;
            }
            p{
                font-weight: 400;
                font-size: 16px;
                color: #313949;
            }
            button{
                width: 148px;
                height: 56px;
                background: #F3F3F3;
                border-radius: 8px;
                color:  #313949;
                border: none;
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
        }  
          
        }
           
       
    }
`