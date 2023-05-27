import { createGlobalStyle } from "styled-components";
import StarsImage from "../assets/stars.webp";

const GlobalStyles = createGlobalStyle`
  html{
    --light-orange: #FF5100;
    --dark-orange: #FF3A00;
    --white: #FFFFFF;
    --black: #000000;
  }
  body{
   /* background: linear-gradient(221deg, rgba(0,0,0,1) 0%, rgba(255,58,0,1) 200%) fixed, url(${StarsImage}); */
   background: rgb(0,0,0);
   background: linear-gradient(221deg, rgba(0,0,0,1) 0%, rgba(66,15,0,1) 52%, rgba(0,0,0,1) 200%) fixed, url(${StarsImage});
   background-blend-mode: overlay;
   scroll-behavior: smooth;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /*---------Custom Scrollbar Styling---------*/
::-webkit-scrollbar {
  width: 0.5vw;
  background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--dark-orange);
  border: 0.5px solid black;
  background-clip: padding-box;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--light-orange);
}
.slide-in {
  transform: translateX(0) !important;
  opacity: 1 !important;
}
.hover{
  &:hover{
    cursor: pointer;
  }
}
`;

export default GlobalStyles;
