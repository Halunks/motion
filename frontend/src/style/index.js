import { createGlobalStyle } from 'styled-components'
import backgroundImg from '../assets/images/background_image_mobile.png'


export const theme = {    
    colorPurplePrimary: "#c468ff", /* #c468ff */
    colorPurplePrimaryDark: "#44384b",
    colorRedPrimary: "#FF3366",
    colorRedPrimaryDark: "#BA265D",
    colorGreyLight1: "#faf9f9",
    colorGreyLight2: "#f8f8f9",
    colorShadowDark: "#BFAFB2",

    linearGradient: "linear-gradient(102deg, #c468ff, #6e91f6)",
}

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%; /* 1.6 rem = 16px*/
    }
    
    *,*:focus,*:hover{
    outline:none;
    }
    
    * {
        margin: 0;
        padding: 0;
        color: #242323;
        box-sizing: border-box;
        font-size: 1.6rem;
        cursor: default;
        
        @media only screen and (max-device-width: 851px){
            display: flex;
            background-image: url(${backgroundImg}), linear-gradient(102deg, #c468ff, #6e91f6);
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            justify-content: center;
            align-items: center;
        }
    }

    **,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    html {
        font-size: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    body {
        font-weight: 400;
        line-height: 1.6;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        color: #faf9f9;
    }

    p {
        line-height: 2.6rem;
        font-size: 1.6rem;
    }

    html {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }

    html::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
`;
