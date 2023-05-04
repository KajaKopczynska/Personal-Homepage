import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: ${({theme}) => theme.color.mercury};
        color: ${({theme}) => theme.color.slateGray};
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        transition: background 0.4s;
        padding-bottom: 108px;

        @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
            padding-bottom: 32px;
        }
        
    }
    button {
        cursor: pointer;
    }  

`;