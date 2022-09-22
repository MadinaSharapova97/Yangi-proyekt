import styled from 'styled-components'

export const StyledNavbar = styled.div`
     position: relative;
     padding: 8px 0 8px 0;
     background: #fff;
     main{
        display: flex;
        /* gap: 7px; */
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 15px 0 15px 0;
     }
    .section-one{

        .left{
          display: flex;
        align-items: center;
        gap:7px;
        a{
            text-decoration: none;
        }
     span{
        font-style: normal;
        font-weight: 400;
        font-size: 45px;
        line-height: 48px;
        color: #12AAE4;
    }  
        }
         
    }
    .section-two{
      display: flex;
      align-items: center;
      gap: 240px;
      /* border: solid red 1px; */
      
      ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 32px;
        li{
            color: #313949;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            list-style: none;
            a{
                font-weight: 400;
                font-size: 16px;
                color: #313949;
                text-decoration: none;
                &.active{
                    border-top: 6px solid #12AAE4;
                    color: #12AAE4;
                    padding-top: 20px;
                }
            }
        }
    }
    .user{
        display: flex;
        align-items: center;
        gap: 45px;
    }
      
    }
    section.open_menu{
        display: none;
    }
   @media (max-width: 376px) {
    main{
     justify-content: space-between;
    }
    section.open_menu{
        display: block;
    }
    .section-two{
        z-index: 1;
           position: absolute;
           /* border: solid red 1px; */
           background-color: #fff;
           border-radius: 12px;
           width: 100%;
           left: 0;        
           bottom: 0;
           transform: translate(0%,-100%);
           flex-direction: column;
           gap: 30px;
           padding: 10px 0 10px 0;
           border: 1px solid rgba(0, 0, 0, 0.1);
           transition: 0.2s linear;
           &.active{
            transform: translate(0%,100%);
           }
           ul{
            gap: 20px;
            flex-direction: column;
            align-items: center;
           }
           .user{
            flex-direction: column;
            gap: 30px;
           }
    }
   }
    

`
