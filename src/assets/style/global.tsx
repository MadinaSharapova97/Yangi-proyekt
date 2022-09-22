import { createGlobalStyle } from "styled-components";

import './font.css'
import './icon.css'

 const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat';
     }
     .container{
        max-width: 1224px;
        margin: 0 auto;
        /* border: solid 1px green; */

     }
     @media (max-width: 376px) {
      .container{
         width: 345px;
         padding: 0 15px ;
         margin: 0 auto;
         /* border: solid 1px green; */
      }
  
     }

`
export default GlobalStyle;