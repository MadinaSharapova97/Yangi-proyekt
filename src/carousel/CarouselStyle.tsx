import styled from "styled-components";

export const StyledCarousel = styled.div`
padding: 100px 0 62px 0;
     h1{
        font-weight: 500;
        font-size: 40px;
        color: #313949;
     }
    .carousel{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .map{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px 0 62px 0;
        /* img{
            width: 330px;
        } */
    }
    .maktablar{
        /* width: 1093px; */
        /* height: 208px; */
        border: 1px solid rgba(49, 57, 73, 0.1);
        border-radius: 24px;
        padding: 40px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            color: #12AAE4;
            padding: 0 0 48px 0;
        }
        h2{
            font-weight: 600;
            font-size: 40px;
            color: #12AAE4;
        }

    }
    @media (max-width: 376px) {
        .map{
            img{
            width: 330px;
        }
        }
        .container_carousel{
          width: 344px;
          padding: 0 20px;
        }
        .maktablar{
            align-items: center;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 13px 0 13px;
            border: none;
            gap: 32px;
            /* img{
            width: 330px;
        } */
            p{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
        }
        h2{
            font-weight: 600;
            font-size: 28px;
            line-height: 32px;
        }
        }
    }

`